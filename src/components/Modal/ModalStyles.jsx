import styled from "styled-components"
export const Modal = styled.div`
width: 90%;
height: 80%;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
padding: 0px;
z-index: 10111;
border-radius: 20px;

`
export const ModalWrapper = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
position: relative;
width: 100%;
height: 100%;
margin-bottom: 10px;
  justify-content: space-between;
  overflow-y: scroll;
`
export const ModalTitle = styled.h1`
  font-size: 60px;


`
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