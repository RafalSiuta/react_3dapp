import { MeshReflectorMaterial } from '@react-three/drei';

function Ground() {
    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow >
            {/* <planeGeometry args={[20, 20]}/> */}
            <circleGeometry args={[5, 20]} />
            
            <MeshReflectorMaterial color={'#28263a'} roughness={0.8}/>
        </mesh>
    );
}

export default Ground;