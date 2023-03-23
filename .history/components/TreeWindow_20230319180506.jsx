import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Box from './Box';
import classes from './TreeWindow.module.css';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Scene from './Scene';


function TreeWindow (){
  
    return (
        <Suspense fallback={null}>
            <Canvas className={classes.Canvas} shadows >
               <Scene/>
            </Canvas>
        </Suspense>
        
    );
}

export default TreeWindow

/*
 <ambientLight />
                <pointLight position={[1, 1, 1]} />
                {/* <Box position={[-1.2, 0, 0]} /> }
                <Box position={[0, 0, 0]} />
*/