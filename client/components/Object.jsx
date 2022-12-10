import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function Scene() {
  const obj = useLoader(OBJLoader, 'server/Z2.obj')
  return <primitive object={obj} />
}