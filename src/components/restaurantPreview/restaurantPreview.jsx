
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Sky } from "../../models";
import Restaurant from "../../models/Restaurant";
import { memo } from "react";
const RestaurantPreview = memo(() => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
 
  const [rotationAngle, setRotationAngle] = useState([0, 0, 0]);
  const rotationSpeed = isRotating ? 0.0000000000001 : 0; 
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;


    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }; 

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
    screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43.4];
    } else {
     screenScale = [1, 1, 1];
      screenPosition = [0, -10, -43.4];
    }

    return [screenScale, screenPosition];
  };


  const handleMouseDown = (e) => {
    setIsRotating(true);
  };

  const handleMouseUp = () => {
    setIsRotating(false);
  };

  const handleMouseMove = (e) => {

    if (isRotating) {
      const { movementX, movementY } = e;
      console.log( movementX, movementY )
      setRotationAngle([
        rotationAngle[0] + movementY * 0.001 ,
        rotationAngle[1] + movementX * 0.001+0.7 ,
        0
      ]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
     document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isRotating]); 
const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <>
      <section className="w-full h-screen relative">
        <Canvas
              onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
          style={{ width: "100wv", height: "100vh" }}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={"loading"}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky
            isRotating={rotationSpeed !== 0} rotationSpeed={0.0001} 
            />
            
            <Restaurant
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={islandPosition}
              rotation={[0.1, 4.7077, 0]}
              scale={islandScale}

  /> 
          </Suspense>
        </Canvas>

      </section>
    </>
  );
});

export default RestaurantPreview;






//https://gltf.pmnd.rs/










/*
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Music from "../../assets/sakura.mp3";
import { Sky } from "../../models";
import Restaurant from "../../models/Restaurant";
import React, { useRef, useState, useEffect } from "react";

const RestaurantPreview = () => {
  const audioRef = useRef(new Audio(Music));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const rotationSpeed = isRotating ? 0.0000000000001 : 0; // Adjust rotation speed here

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const toggleSound = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -10, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
      <section className="w-full h-screen relative">
        <Canvas
          style={{ width: "100wv", height: "100vh" }}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={"loading"}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Sky isRotating={rotationSpeed !== 0} rotationSpeed={0.0001} />

         <OrbitControls />  
            <Restaurant
              isRotating={rotationSpeed !== 0}
              rotationSpeed={0.0001}
              position={islandPosition}
              rotation={[0.1, 4.7077, 0]}
              scale={islandScale}
            />
          </Suspense>
        </Canvas>
        <button onClick={toggleSound}>Sound</button>
        <button onClick={toggleRotation}>
          {isRotating ? "Stop Rotation" : "Start Rotation"}
        </button>
      </section>
    </>
  );
};
export default RestaurantPreview;

*/