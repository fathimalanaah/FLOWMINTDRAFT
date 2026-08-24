"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* ---------------------------------------------------------------------------
   All geometry here is authored in code rather than loaded as a mesh.
   The forms are simple — a C-channel and four boxes carrying a slot, a port
   row, an aperture ring and a side coupling — so procedural geometry is both
   lighter and more controllable than a generated GLB, and the whole set shares
   one material system by construction.
--------------------------------------------------------------------------- */

const MINT = "#3be0a0";
const CERAMIC = "#b3bab6";
const STEEL = "#7d8783";
const CHANNEL = "#262d2a";

const SPAN = 13; // channel length in world units
const SLOTS = [-4.35, -1.45, 1.45, 4.35]; // where the four modules come to rest

/** C-section profile, extruded along the channel's length. */
function useChannelGeometry() {
  return useMemo(() => {
    const s = new THREE.Shape();
    const w = 0.62;
    const h = 0.5;
    const t = 0.12;
    s.moveTo(-w, -h);
    s.lineTo(w, -h);
    s.lineTo(w, h);
    s.lineTo(w - t, h);
    s.lineTo(w - t, -h + t);
    s.lineTo(-w + t, -h + t);
    s.lineTo(-w + t, h);
    s.lineTo(-w, h);
    s.closePath();

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: SPAN,
      bevelEnabled: true,
      bevelSize: 0.012,
      bevelThickness: 0.012,
      bevelSegments: 2,
    });
    geo.rotateY(Math.PI / 2);
    geo.translate(-SPAN / 2, 0, 0);
    return geo;
  }, []);
}

type Refs = { progress: MutableRefObject<number> };

function Conduit() {
  const geometry = useChannelGeometry();
  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color={CHANNEL} metalness={0.85} roughness={0.38} />
    </mesh>
  );
}

/** The mint ribbon. Grows along the channel once the modules have connected. */
function Ribbon({ progress }: Refs) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    // Modules connect across 0 → 0.62; the ribbon runs 0.55 → 1.
    const t = THREE.MathUtils.clamp((progress.current - 0.55) / 0.45, 0, 1);
    const eased = t * t * (3 - 2 * t);
    mesh.scale.x = Math.max(eased, 0.0001);
    mesh.position.x = -SPAN / 2 + (SPAN * eased) / 2;
    mesh.visible = eased > 0.001;
  });

  return (
    <mesh ref={ref} position={[-SPAN / 2, -0.16, 0]}>
      <boxGeometry args={[SPAN, 0.17, 0.72]} />
      <meshStandardMaterial
        color={MINT}
        emissive={MINT}
        emissiveIntensity={1.15}
        roughness={0.5}
        toneMapped={false}
      />
    </mesh>
  );
}

type ModuleProps = Refs & {
  index: number;
  face: "slot" | "ports" | "aperture" | "coupling";
};

/**
 * One module. Each arrives from off-axis and seats onto the channel across its
 * own slice of the scroll, so the four read as a sequence being assembled
 * rather than four things appearing at once.
 */
function Module({ index, face, progress }: ModuleProps) {
  const group = useRef<THREE.Group>(null);
  const indicator = useRef<THREE.MeshStandardMaterial>(null);

  const start = index * 0.13;
  const end = start + 0.3;
  const from = useMemo(
    () => new THREE.Vector3(SLOTS[index] + (index % 2 ? 2.4 : -2.4), 4.6 + index * 0.7, index % 2 ? 3 : -3),
    [index],
  );

  useFrame(() => {
    const g = group.current;
    if (!g) return;

    const t = THREE.MathUtils.clamp((progress.current - start) / (end - start), 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);

    g.position.x = THREE.MathUtils.lerp(from.x, SLOTS[index], eased);
    g.position.y = THREE.MathUtils.lerp(from.y, 0.78, eased);
    g.position.z = THREE.MathUtils.lerp(from.z, 0, eased);
    g.rotation.y = THREE.MathUtils.lerp(index % 2 ? 0.9 : -0.9, 0, eased);
    g.rotation.z = THREE.MathUtils.lerp(index % 2 ? -0.35 : 0.35, 0, eased);

    // The indicator only lights once this module is seated and the mint has
    // reached it — the light means connected, it is not ambience.
    const reach = THREE.MathUtils.clamp((progress.current - 0.55) / 0.45, 0, 1);
    const arrived = eased > 0.98 && reach > (index + 0.5) / 4;
    if (indicator.current) {
      indicator.current.emissiveIntensity = THREE.MathUtils.lerp(
        indicator.current.emissiveIntensity,
        arrived ? 1.6 : 0.04,
        0.12,
      );
    }
  });

  return (
    <group ref={group}>
      <RoundedBox args={[1.55, 1.25, 1.1]} radius={0.16} smoothness={4} castShadow>
        <meshStandardMaterial color={CERAMIC} roughness={0.82} metalness={0.05} />
      </RoundedBox>

      {/* brushed steel face plate */}
      <mesh position={[0, 0, 0.561]}>
        <boxGeometry args={[1.18, 0.9, 0.02]} />
        <meshStandardMaterial color={STEEL} metalness={0.78} roughness={0.32} />
      </mesh>

      {face === "slot" && (
        <mesh position={[0, 0.12, 0.578]}>
          <boxGeometry args={[0.84, 0.1, 0.02]} />
          <meshStandardMaterial color="#111614" roughness={0.9} />
        </mesh>
      )}

      {face === "ports" &&
        [-0.3, -0.1, 0.1, 0.3].map((x) => (
          <mesh key={x} position={[x, 0.1, 0.578]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.062, 0.062, 0.03, 16]} />
            <meshStandardMaterial color="#111614" roughness={0.9} />
          </mesh>
        ))}

      {face === "aperture" && (
        <mesh position={[0, 0.08, 0.578]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.24, 0.045, 12, 32]} />
          <meshStandardMaterial color={MINT} emissive={MINT} emissiveIntensity={0.5} toneMapped={false} />
        </mesh>
      )}

      {face === "coupling" && (
        <mesh position={[0.86, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.34, 20]} />
          <meshStandardMaterial color={STEEL} metalness={0.85} roughness={0.28} />
        </mesh>
      )}

      {/* the mint indicator strip */}
      <mesh position={[0, -0.3, 0.578]}>
        <boxGeometry args={[0.42, 0.075, 0.02]} />
        <meshStandardMaterial
          ref={indicator}
          color={MINT}
          emissive={MINT}
          emissiveIntensity={0.04}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function Rig({ progress }: Refs) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    // A slow settle as the assembly completes, so the finished state is read
    // from a slightly more head-on angle than the opening.
    const t = THREE.MathUtils.clamp(progress.current, 0, 1);
    group.current.rotation.y = THREE.MathUtils.lerp(-0.42, -0.16, t);
    group.current.rotation.x = THREE.MathUtils.lerp(0.3, 0.16, t);
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      <Conduit />
      <Ribbon progress={progress} />
      {(["slot", "ports", "aperture", "coupling"] as const).map((face, i) => (
        <Module key={face} index={i} face={face} progress={progress} />
      ))}
    </group>
  );
}

export default function Scene({ progress }: Refs) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.2, 11.5], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lit like the photography: a soft key from upper left, a hard rim along
          the channel edge, and almost no fill. */}
      <ambientLight intensity={0.22} />
      <directionalLight position={[-6, 7, 5]} intensity={2.1} />
      <directionalLight position={[7, 2, -6]} intensity={1.5} color="#cfe4dc" />
      <Rig progress={progress} />
    </Canvas>
  );
}
