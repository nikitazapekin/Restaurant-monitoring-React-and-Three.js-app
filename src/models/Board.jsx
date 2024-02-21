/*
import React, { useRef } from "react";
import * as THREE from "three";

export function Board() {
  const boardRef = useRef();
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
   // const centerX = canvas.width / 2;
  //  const centerY = canvas.height / 2;
    
    context.font = "Bold 40px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
//    context.fillText(text, centerX, centerY);
context.fillText(text, 200, 70);
    return new THREE.CanvasTexture(canvas);
  };
  
  const contentOfBoard = `Retaurant Zorka Tables`
  const textures = [contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard].map(createTexture);
  //const geometry = new THREE.BoxGeometry();
  const geometry = new THREE.BoxGeometry( 10, 40, 100 ); 
 // const geometry = new THREE.BoxGeometry(100, 100, 100); // Ширина, высота и глубина куба
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.set(70, 20, 20); // Позиция куба
  return <primitive ref={boardRef} object={cube} />;
}
 */


import React, { useRef } from "react";
import * as THREE from "three";

export function Board() {
  const boardRef = useRef();
  
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
    
    context.font = "Bold 40px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    
    const restaurantText = "Restaurant Zorka";
    const tablesText = "Tables";
    
    context.fillText(restaurantText, canvas.width / 2, 70);
    context.fillText(tablesText, canvas.width / 2, 120);
    
const firstRest = `Table №1: 4/4`
context.fillText(firstRest, (canvas.width / 2) -160, 190);
const secondRest = `Table №2:  4/4`
context.fillText(secondRest, (canvas.width / 2) -160, 260);
const thirdRest = `Table №3:  2/2`
context.fillText(thirdRest, (canvas.width / 2) -160, 330);
const  fourthRest = `Table №4:  2/2`
context.fillText(fourthRest, (canvas.width / 2) -160, 400);

const fifthRest = `Table №5: 2/2`
context.fillText(fifthRest, (canvas.width / 2) +160, 190);
const sixRest = `Table №6:  2/2`
context.fillText(sixRest, (canvas.width / 2) +160, 260);
const seventhRest = `Table №7:  2/2`
context.fillText(seventhRest, (canvas.width / 2) +160, 330);
const  eightRest = `Table №8:  2/2`
context.fillText(eightRest, (canvas.width / 2) +160, 400);
const restaurantWidth = context.measureText(restaurantText).width;
    


    return new THREE.CanvasTexture(canvas);
  };
  
  const contentOfBoard = `Retaurant Zorka Tables`;
  const textures = [contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard].map(createTexture);
  
  const geometry = new THREE.BoxGeometry(10, 40, 100); 
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.set(70, 20, 20); // Position of the cube

  return <primitive ref={boardRef} object={cube} />;
}
