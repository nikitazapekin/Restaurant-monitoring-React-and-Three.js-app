import { useState } from "react";
import { useEffect } from "react";
import useTables from "./useTables";
const isAbleToBook = (checkTime, startTime, endTime) => {
    const [checkHours, checkMinutes] = checkTime.split(":").map(Number);
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);
  const checkTotalMinutes = checkHours * 60 + checkMinutes;
  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;
  if (checkTotalMinutes >= startTotalMinutes && checkTotalMinutes <= endTotalMinutes) {
      console.log(`${checkTime} находится в промежутке между ${startTime} и ${endTime}.`);
      return true
  } else {
      console.log(`${checkTime} не находится в промежутке между ${startTime} и ${endTime}.`);
      return false
  }
  }
const useBoard = ({currentTime}) => {
    const {data} = useTables({currentTime})
    console.log("DATAA" +JSON.stringify(data))
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

  }, [isbookedTable])
  return {isbookedTable}
}

export default useBoard