import React, { useRef, useState, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import Box from './Box';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Ground from './Ground';
import Box from './Box';

function Scene(){
    return (
        <>
            <OrbitControls target={[0, 0.4, 0]} maxPolarAngle={1.45}/>
            <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
            <color args={[0, 0, 0]} attach='background'/>
            
            <spotLight
                color={'#fff'}
                intensity={0.5}
                angle={0.6}
                penumbra={0.5}
                position={[2, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={'#fff'}
                intensity={0.7}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <Box/>
            <Ground/>


        </>
    );
}

export default Scene;