import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function Car(){
    const gltf = useLoader(
        GLTFLoader,
        "models/vintenge_car.gltf"
    );

    //get access to the model
    // Putting already existing objects into the scene-graph:
    /*
        const mesh = new THREE.Mesh(geometry, material)

        function Component() {
        return <primitive object={mesh} position={[10, 0, 0]} />
    */
    //https://docs.pmnd.rs/react-three-fiber/api/objects
    useEffect(() => {
   gltf.scene.position.set(0, -0.5, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  //load wheels animations
//   useFrame((state, delta) => {
//     let t = state.clock.getElapsedTime();

//     let group = gltf.scene.children[0].children[0].children[0];
//     group.children[0].rotation.x = t * 2;
//     group.children[2].rotation.x = t * 2;
//     group.children[4].rotation.x = t * 2;
//     group.children[6].rotation.x = t * 2;
//   });

  return <primitive object={gltf.scene} />;
}

export default Car;