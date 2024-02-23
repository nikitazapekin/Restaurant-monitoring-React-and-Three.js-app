/*
// Заданный промежуток времени
const startTime = "13:40";
const endTime = "14:00";

// Время для проверки
const checkTime = "13:30";

// Разбиваем время на часы и минуты
const [checkHours, checkMinutes] = checkTime.split(":").map(Number);
const [startHours, startMinutes] = startTime.split(":").map(Number);
const [endHours, endMinutes] = endTime.split(":").map(Number);

// Преобразуем время в минуты для сравнения
const checkTotalMinutes = checkHours * 60 + checkMinutes;
const startTotalMinutes = startHours * 60 + startMinutes;
const endTotalMinutes = endHours * 60 + endMinutes;

// Проверяем, находится ли checkTime в промежутке startTime-endTime
if (checkTotalMinutes >= startTotalMinutes && checkTotalMinutes <= endTotalMinutes) {
    console.log(`${checkTime} находится в промежутке между ${startTime} и ${endTime}.`);
} else {
    console.log(`${checkTime} не находится в промежутке между ${startTime} и ${endTime}.`);
}
*/


import React, { useRef, useState } from "react";
import * as THREE from "three";
import useMonitoring from "../subscribtions/monitoring";
import { useEffect } from "react";
import useTables from "../hooks/useTables";
import useBoard from "../hooks/useBoard";
/*const isAbleToBook = (checkTime, startTime, endTime) => {
  const [checkHours, checkMinutes] = checkTime.split(":").map(Number);
const [startHours, startMinutes] = startTime.split(":").map(Number);
const [endHours, endMinutes] = endTime.split(":").map(Number);

// Преобразуем время в минуты для сравнения
const checkTotalMinutes = checkHours * 60 + checkMinutes;
const startTotalMinutes = startHours * 60 + startMinutes;
const endTotalMinutes = endHours * 60 + endMinutes;

// Проверяем, находится ли checkTime в промежутке startTime-endTime
if (checkTotalMinutes >= startTotalMinutes && checkTotalMinutes <= endTotalMinutes) {
    console.log(`${checkTime} находится в промежутке между ${startTime} и ${endTime}.`);
    return true
} else {
    console.log(`${checkTime} не находится в промежутке между ${startTime} и ${endTime}.`);
    return false
}
} */
export function Board() {
  const boardRef = useRef();
 const {currentTime} = useMonitoring()
const {isbookedTable} = useBoard(currentTime)
 
/*const {data} = useTables()
const [isbookedTable, setIsBoockedTable] = useState({

  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  six: "",
  seventh: "", 
  eight: ""
})
useEffect(() => {
  console.log("TABLES" + JSON.stringify(data));
  
  const time = new Date();
  console.log(time.getMinutes());
  console.log(time.getHours());
  const currentTime = `${time.getHours()}:${time.getMinutes()}`;
  
  if (data !== undefined) {
    for (let i = 0; i < data.tables.length; i++) {
      console.log(JSON.stringify(data.tables[i]));
      let isBooked = false;
      data.tables[i].timeForBooking.filter(item => {
        if (isAbleToBook(currentTime, item.from, item.to)) {
          isBooked = true;
          console.log("CANNOT" + JSON.stringify(item));
          const indexField = Object.keys(isbookedTable)[i];
          setIsBoockedTable(prevState => ({
            ...prevState,
            [indexField]: `${item.from}-${item.to}`
          }));
        } else {
          return item;
        }
      });
    }
  }
}, [data]);
  useEffect(()=> {
console.log("isbookedTable" +JSON.stringify(isbookedTable))

  }, [isbookedTable]) */
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
    
    context.font = "Bold 30px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    
    const restaurantText = "Restaurant Zorka";
    const tablesText = "Tables";
    
    context.fillText(restaurantText, canvas.width / 2, 70);
    context.fillText(tablesText, canvas.width / 2, 120);
    
const firstRest = isbookedTable.first.length!=0 ? "№1 booked for "+ isbookedTable.first : `№1: 4/4`
context.fillText(firstRest, (canvas.width / 2) -100, 190);
const secondRest = isbookedTable.second.length!=0 ? "№2 booked for "+ isbookedTable.second : `№2:  4/4`
context.fillText(secondRest, (canvas.width / 2) -100, 260);
const thirdRest =isbookedTable.third.length!=0 ? "№3 booked for "+ isbookedTable.third : `№3:  2/2`
context.fillText(thirdRest, (canvas.width / 2) -100, 330);
const  fourthRest = isbookedTable.fourth.length!=0 ? "№4 booked for "+ isbookedTable.fourth :  `№4:  2/2`
context.fillText(fourthRest, (canvas.width / 2) -100, 400);
context.fillText(currentTime, (canvas.width / 2), 500);
const restaurantWidth = context.measureText(restaurantText).width;
    
    return new THREE.CanvasTexture(canvas);
  };
  
  const contentOfBoard = `Retaurant Zorka Tables`;
  const textures = [contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard].map(createTexture);
  
  const geometry = new THREE.BoxGeometry(10, 60, 160); 
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.set(100, 30, 20); // Position of the cube

  return <primitive ref={boardRef} object={cube} />;
}
