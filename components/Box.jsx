import React, { useRef, useState } from 'react';
// import { useFrame, } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { MeshReflectorMaterial } from '@react-three/drei';



function Box(){

          // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += delta));
//   // Return view, these are regular three.js elements expressed in JSX
    return (
        <>
            <OrbitControls target={[0, 0.3, 0]} maxPolarAngle={1.45}/>
            <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
            {/* <mesh
                
                {...props}
                ref={mesh}
                scale={active ? 1.5 : 1}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? '#FFB300' : '#FFD54F'} />
            </mesh> */}
            <mesh position={[0,1.2,0]}>
                <boxGeometry args={[1.5, 1.5, 1.5]}/>
                {/* <meshBasicMaterial color={'#FFD54F'} /> */}
                <MeshReflectorMaterial color={'#FFD54F'} roughness={0.6}/>
            </mesh>
        </>
            
    );
}

export default Box;