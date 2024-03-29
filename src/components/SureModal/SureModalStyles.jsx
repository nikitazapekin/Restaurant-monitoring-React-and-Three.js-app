import styled from "styled-components"
export const Modal = styled.div`
width: 50%;
height: 400px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
padding: 0px;
z-index: 10111;
border-radius: 20px;
//transition: 2s;
//transform: ${props=> props.open ? "scale(1)" : "scale(0)"};

`
export const ModalWrapper = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
position: relative;
width: 100%;
height: 100%;
justify-content: space-between;
//row-gap: 50px;
 // justify-content: space-between;
 // overflow-y: scroll;
`
export const ModalTitle = styled.h1`
  font-size: 40px;
  font-weight: 900;
 

`
export const  OverlayStyles = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 1000;
`

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
`
 export const AgreeButton = styled.button`

    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    border-radius: 20px;;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
    letter-spacing: 2px;
  background-color: rgba(212, 125, 4);
  color: #fff;
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  transition: 1s ease-in-out;
 `
  export const DisagreeButton = styled.button`
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  border-radius:20px;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 32px;
  justify-content: center;
  border: none;
  outline: none;
  &:hover{
    letter-spacing: 2px;
  background-color: rgba(148, 32, 6);
  color: #fff;
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  transition: 1s ease-in-out;
`
/*
export const HeaderWrapper = styled.div`
width: 100%;
display: flex;
  justify-content: space-between;

`
export const ModalData = styled.div`
font-size: 50px;

`
export const ModalButton = styled.button`
width: 100%;
height: auto;
padding: 30px;
border: none;
outline: none;
font-size: 32px;
cursor: pointer;
position: relative;
//top: 100%;
border-radius: 20px;
transition: 1s ease-in-out;
margin-bottom: 0px;
&:hover{
    letter-spacing: 2px;
  background-color: rgba(212, 125, 4);
  color: #fff;
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
export const  OverlayStyles = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 1000;
`
export const ModalHeader = styled.div`
position: relative;
width: 100%;
height: 50%;
background-color: rgba(4, 209, 69);
border-radius: 20px 20px 0px 0px; 
display: flex;
align-items: center;
justify-content: center;
`
export const ModalHeaderImage =styled.img`
width: 50%;
height: 50%;
`
export const ModalTextBlock = styled.div`
font-weight: 800;
font-size: 32px;
text-align: center;
`
export const ModalContentWrapper = styled.div`
padding: 20px;
`


export const SelectDataTitle  = styled.div`
font-size: 40px;
`
export const SelectDataContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`

export const SelectDataOption = styled.div`
  font-size: 32px;
  cursor: pointer;
  `
export const SelectTimeTitle  = styled.div`
font-size: 40px;
`
export const GridWrapper = styled.div`
    width: 100%;
`
export const GridTable =  styled.div`
    height: auto;
    position: relative;
    z-index: 1234;
    justify-items: center; 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30%;
  padding: 50px;
  `
export const GridTableElement = styled.div`
   // width: auto;
 //height: auto;
    position: relative;
    max-width: 50%;
    width: 100%;
    padding: 30px;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
display: flex;
flex-direction: column;

&:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

`
export const SelectBookingTimeBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`
export const SelectBookingTimeBlockFrom = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const SelectingBookingTimeBlockFromTitle = styled.p`
font-size: 32px;
`
export const SelectingBookingTime= styled.input`
  width: 90%;
  height: 60px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 3px solid gray;
  outline: none;
  color: gray;
  font-size: 32px;
  `
  export const ErrorTime = styled.div`
color: red;
font-size: 30px;
text-align: center;
`
export const BookedTime = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  gap: 5px;
  margin-bottom: 20px;
  `
export const BookedTimeItem =styled.div`
width: 100%;
  height: auto;
  position: relative;
  padding: 20px;
`
export const BookingTimeItemBackground = styled.div`
border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(173, 173, 173);
  opacity: 0.2;
`
export const BookingTimeItemContent = styled.div`
width: 100%;
position: relative;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const BookingTimeItemContentText = styled.p`
font-size: 35px;
  color: gray;
  
`

export const SelectForAllDayTable = styled.div`



  width: 100%;
height: auto;
padding: 10px;
border: none;
outline: none;
font-size: 32px;
text-align: center;
cursor: pointer;
position: relative;
//top: 100%;
border-radius: 20px;
transition: 1s ease-in-out;
margin-bottom: 0px;
&:hover{
    letter-spacing: 2px;
  background-color: rgba(212, 125, 4);
  color: #fff;
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
*/