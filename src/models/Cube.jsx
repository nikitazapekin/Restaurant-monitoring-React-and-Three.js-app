
import React, { useRef } from "react";
import * as THREE from "three";

export function Cube({number, x,y,z}) {
  const cubeRef = useRef();
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    context.font = "Bold 120px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText(text, centerX, centerY);
    
    return new THREE.CanvasTexture(canvas);
  };
      const textures = [number, number, number, number, number, number].map(createTexture);
      const geometry = new THREE.BoxGeometry();
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  return <primitive ref={cubeRef} object={cube} />;
 
}