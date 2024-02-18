/*import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
// Компонент куба с цифрами на каждой стороне
export function Cube() {
  const cubeRef = useRef();

  // Позиции для каждой стороны куба
  const positions = [
    [1, 0, 0], // Правая сторона
    [-1, 0, 0], // Левая сторона
    [0, 1, 0], // Верхняя сторона
    [0, -1, 0], // Нижняя сторона
    [0, 0, 1], // Передняя сторона
    [0, 0, -1] // Задняя сторона
  ];

 
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    context.font = "Bold 120px Arial";
    context.fillStyle = "white";
    context.fillText(text, 50, 150);
    return new THREE.CanvasTexture(canvas);
  };
  const textures = ["1", "1", "1", "1", "1", "1"].map(createTexture);
  const geometry = new THREE.BoxGeometry();
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = 3;
  cube.position.y = 3;
  return <primitive ref={cubeRef} object={cube} />;
}
*/
const coordinates =[
{number: "1",  x: -6, y: 1.5, z:  -0.25},
{number: "2",  x: -9, y: 1.5, z:  -0.25}
]
import React, { useRef } from "react";
import * as THREE from "three";

export function Cube({number, x,y,z}) {
  const cubeRef = useRef();
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    
    // Определение середины текстуры
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    context.font = "Bold 120px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText(text, centerX, centerY);
    
    return new THREE.CanvasTexture(canvas);
  };
  
 /*
  const textures = ["1", "1", "1", "1", "1", "1"].map(createTexture);
  const geometry = new THREE.BoxGeometry();
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = -6;
  cube.position.y = 1.5;
  cube.position.z = -0.25;
  return <primitive ref={cubeRef} object={cube} />; */
 

      const textures = [number, number, number, number, number, number].map(createTexture);
      const geometry = new THREE.BoxGeometry();
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  return <primitive ref={cubeRef} object={cube} />;
 
}