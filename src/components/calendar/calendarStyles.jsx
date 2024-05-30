import styled from "styled-components";

/*
export const CalendarComponent = styled.div`
width: 100%;
height: 300px;
//background-color: red;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
z-index: 1234;
`
export const CalendarBlock = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const CurrentData = styled.div`
    font-size: 34px;
`
export const CalendarComponentSwitchButtons = styled.div`
    display: flex;
    gap: 10px;
position: relative;
`
export const CalendarComponentSwitchButton = styled.div`
    padding: 10px;
    font-size: 32px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: 1s ease-in-out;
  
    &:hover{
    letter-spacing: 2px;
  background-color: rgba(212, 125, 4);
  color: #fff;
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
export const CalendarComponentSwitchButtonBackground = styled.div`
    background-color: rgba(99, 99, 99);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-radius: 10px ;

`
export const CalendarDatas = styled.div`
  position: relative;
  width: 100%;
  height: auto;
    z-index: 1234;
   justify-items: center; 
    display: grid;
    grid-template-columns: repeat(7, 1fr);
 // grid-row-gap: 5%;
`
export const CalendarData = styled.div`
    display: flex;
   
    max-width: 400px;
    width: 100%;
 padding:  10px 0;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    transition: 1s ease-in-out;
    cursor: pointer;
    height: 50px;

    &:hover {
        text-shadow: rgba(0, 0, 0, 0.25) 50px 50px 100px -24px;
        background-color: #bdb8b8;
        font-size: 22px;
        font-weight: 900;
    }

    position: relative;
`;


export const ErrorTime = styled.div`
    color: red;
    font-size: 24px;
`

*/

export const CalendarComponent = styled.div`
    width: 100%;
    height: 432px;
    background-color: #E0B574;
    border-radius: 14px;
    padding: 21px 26px;
`

export const CalendarDatas = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
`


export const CalendarDataDay = styled.div`
width: 55px;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 12px;
color: #000;


font-family: "Inter", sans-serif;
`
export const CalendarDateBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const CalendarBtns = styled.div`
display: flex;
`
export const CalendarBtn = styled.div`
 
`
export const CalendarDateBlockTitle = styled.p`
font-weight: 600;
font-size: 12px;
color: #000;
font-family: "Inter", sans-serif;
`
export const CalendarData = styled.div`
width: 55px;
height: 55px;
display: flex;
align-items: center;
transition: 1s;
justify-content: center;
border: 0.87px solid #000;
cursor: pointer;
&:hover {
    background: #45539d;

    font-weight: 600;
font-size: 12px;
color: #fff;
}
`


export const CalendarDataDisabled = styled.div`
width: 55px;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
background: #ba955e;
border: 0.87px solid #000;
`