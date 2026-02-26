// components/Model.tsx
import { useGLTF } from "@react-three/drei";

export default function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}
