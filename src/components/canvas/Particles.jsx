import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const ParticleCore = ({ count = 2000, color = "#915eff" }) => {
  const points = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count * 3), { radius: 20 }));

  useFrame((state, delta) => {
    points.current.rotation.x -= delta / 10;
    points.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Particles = ({ count, color }) => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <ParticleCore count={count} color={color} />
      </Suspense>
    </Canvas>
  );
};

export default Particles; 