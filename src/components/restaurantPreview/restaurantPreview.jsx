/*import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Music from "../../assets/sakura.mp3"
import { Suspense } from "react";
import { Sky } from "../../models";
const RestaurantPreview = () => {
    const audioRef = useRef(new Audio(Music));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
  
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
    useEffect(() => {
      if (isPlayingMusic) {
        audioRef.current.play();
      }
  
      return () => {
        audioRef.current.pause();
      };
    }, [isPlayingMusic]);


    
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
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
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
    return (
        <>
            <section className='w-full h-screen relative'>
    
        <button    onClick={() => setIsPlayingMusic(!isPlayingMusic)}>
          Sound
        </button>




        
      <Canvas
      style={{width: "100wv", height: "100vh"}}
      //  className={`w-full h-screen bg-transparent ${
      //    isRotating ? "cursor-grabbing" : "cursor-grab"
     //   }`}
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
           skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
           <Sky isRotating={isRotating} />
        </Suspense> 
      </Canvas>
 
    </section>
        </>
      );
}
 
export default RestaurantPreview;  */


import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Music from "../../assets/sakura.mp3";
import { Suspense } from "react";
import { Sky } from "../../models";

const RestaurantPreview = () => {
  const audioRef = useRef(new Audio(Music));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

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

  return (
    <>
      <section className="w-full h-screen relative">
        <button onClick={toggleSound}>Sound</button>
        <button onClick={toggleRotation}>
          {isRotating ? "Stop Rotation" : "Start Rotation"}
        </button>
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
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky isRotating={isRotating} />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};
export default RestaurantPreview;
/*
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Music from "../../assets/sakura.mp3";
import { Suspense } from "react";
import { Sky } from "@react-three/drei";

const RestaurantPreview = () => {
  const audioRef = useRef(new Audio(Music));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

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

  return (
    <>
      <section className="w-full h-screen relative">
        <button onClick={toggleSound}>Sound</button>
        <button onClick={toggleRotation}>
          {isRotating ? "Stop Rotation" : "Start Rotation"}
        </button>

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
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky rotation={isRotating ? 0.5 : 0} />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default RestaurantPreview; */










/*
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../../assets/sakura.mp3";
//import { HomeInfo, Loader } from "../components";
//import { soundoff, soundon } from "../assets/icons";
//import { Sky } from "../models";
import { Sky } from "../../models";
const  RestaurantPreview = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
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
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
   
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={"load"}>
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
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Sky isRotating={isRotating} />
   
        </Suspense>
      </Canvas>

   
    </section>
  );
};

export default RestaurantPreview;
 */