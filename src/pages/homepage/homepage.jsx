


import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
import "./homepage.scss"

const Homepage = () => {
return ( 
     <>

 
<NavBar />
<NavBarMobileComponent /> 
<Layout>
<WelcomeForm />
     <Global />
     <Footer />
     </Layout> 
</>
     );
}
 
export default Homepage;
/*
 */



/*
const data = {
     1: [
       {
         date_visit: "2021-06-20",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-21",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-22",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-23",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-24",
         presences: true,
         reason: "null",
        },
       {
         date_visit: "2021-06-25",
         presences: true,
         reason: "null",
       },
     ],
     4: [
       {
         date_visit: "2021-06-19",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-19",
         presences: true,
         reason: "null",
       },
     ],
   };
   
   const Homepage = () => {
     return (
       <div>
         {Object.keys(data).map((key) => {
           return (
             <div key={key}>
               <h3>Key is: {key}</h3>
               {data[key].map(({ date_visit, presences, reason }, idx) => (
                 <div 
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "600px",
                  }}
                 >
                   <div>date_visit: {date_visit}</div>
                   <div>presences: {presences.toString()}</div>
                   <div>reason: {reason}</div>
                 </div>
               ))}
             </div>
           );
         })}
       </div>
     );
   };
   
 export default Homepage;
   
 
 const data = {
     1: [
       {
         date_visit: "2021-06-20",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-21",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-22",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-23",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-24",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-25",
         presences: true,
         reason: "null",
       },
     ],
     4: [
       {
         date_visit: "2021-06-19",
         presences: true,
         reason: "null",
       },
       {
         date_visit: "2021-06-19",
         presences: true,
         reason: "null",
       },
     ],
   };
   import React, { useState } from 'react';

const Homepage = () => {
  // Получаем список всех уникальных дат
  const uniqueDates = Array.from(
    new Set(
      Object.values(data).flatMap(item => item.map(subItem => subItem.date_visit))
    )
  );

  // Состояние для отслеживания выбранной даты
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
     
      <div>
        {uniqueDates.map((date, index) => (
          <button key={index} onClick={() => setSelectedDate(date)}>
            {date}
          </button>
        ))}
        <button onClick={() => setSelectedDate(null)}>Show All</button>
      </div>

      
      {Object.keys(data).map((key) => {
        return (
          <div key={key}>
            <h3>Key is: {key}</h3>
            {data[key]
              .filter(({ date_visit }) => selectedDate ? date_visit === selectedDate : true)
              .map(({ date_visit, presences, reason }, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "600px",
                  }}
                >
                  <div>date_visit: {date_visit}</div>
                  <div>presences: {presences.toString()}</div>
                  <div>reason: {reason}</div>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;

   
              */