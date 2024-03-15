
import styled from "styled-components";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";
export const PersonalFormStyled = styled.div`
    width: 100%;
    //  width: 70%;
    max-height: 70vh;
     height: auto;
  // height: 100%;
    padding: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 30px;
     background-color: #e7e5e5;
     overflow-y: scroll;

    @media screen and (max-width:500px) {
      //  width: 100%;
      padding: 15px;
      top: 45px;
    }
    `


export const PersonalFormBackgroundStyled = styled.div`
    border-radius:20px;
    width: 100%;
height: 100%;
position: absolute;
top:0 ;
left:  0;
opacity: 0.4;
background-color: rgba(202, 204, 219);
z-index: 0;
`
export const PersonalFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  //  background-color: orange;
    @media screen and (max-width:500px) {
        width: 100%;
    }
`
export const PersonalTitle = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    position: relative;
    z-index: 123;
  font-size: 48px;
  @media screen and (max-width: 1000px) {
    font-size: 38px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`
export const PersonalTables = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    font-size: 32px;
    position: relative;
    z-index: 123;
    font-size: 32px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`
export const PersonalFormContent = styled.form`
    position: relative;
    width: 100%;
   // height: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`
export const PersonalItemContentItem = styled.div`
    
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    
    `
export const PersonalItemContentItemInput = styled.input`
position: relative;
    width: 100%;
    height: 60px;
    color: gray;
    cursor: pointer;
    border-bottom: 2px solid gray;
    border-left: none;
    border-right: none;
    border-top: none;
    z-index: 221;
    background-color: transparent;
    outline: none;
    font-size: 32px;
`
export const PersonalItemContentItemSubTitle = styled.p`
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
`
export const  PersonalItemContentSubmit = styled.button`
    width: 100%;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d1d1d1;
    font-size: 32px;
    position: relative;
    z-index: 212;
    border-radius: 20px;
    font-weight: 700;
`
export const PersonalIcon = styled.img`
    position: absolute;
    right: 0;
width: 40px;
height: 40px;
z-index: 1222;
top: 40px
`
export const EyeIcon = styled.img`
    position: absolute;
    right: 0;
width: 40px;
height: 40px;
z-index: 1222;
cursor: pointer;
top: 40px
`
export const GridWrapper = styled.div`
width: 100%;
`

export const PerfectScrollbarStyled = styled(PerfectScrollbar)`
  .ps__thumb-y {
    background-color: red;
    width: 4px;
  }
  .ps__thumb-x {
    background-color: blue;
    height: 8px;
  }
`;

export const GridTable =  styled.div`
    height: auto;
    max-height: 80vh;
 //   overflow-y: scroll;
 position: relative;
    z-index: 1234;
   justify-items: center; 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30%;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  } 
`
export const GridTableElement = styled.div`
width: auto;
 height: auto;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
display: flex;
flex-direction: column;
transition: 1s;
perspective: 300px;






&::after {
    content: attr(data-tooltip);  
    position: absolute;  
width: auto;
 white-space: nowrap;
  padding: 20px;
   display: ${props => props.isBooked ? 'block' : 'none'};
   left: 50%;
   transform: translateX(-50%);
 //   bottom: 0%;  
    background-color: #3989c9;
    border-radius: 5px;
    color: #fff;  
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
    pointer-events: none;  
    opacity: 0;  
    
    transition: 1s;  
   } 
   &:hover::after {
    opacity: 1;  
   }










@media screen and (max-width: 600px) {
  padding: 5px;
}

&:hover {
  transform: rotateY(30deg) rotateX(15deg);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
`
export const GridTableElementBackground = styled.div`
border-radius: 10px;
//background-color: rgba(77, 78, 79);
background-color: ${props=>props.isBooked ? "rgba(255, 3, 3)" : " rgba(77, 78, 79)"};
position: absolute;
left: 0;
height: 100%;
width: 100%;
top: 0;
z-index: 0;
opacity: 0.1;
`
export const  GridTableElementTitle = styled.p`
font-size: 32px;
position: relative;

@media screen and (max-width: 600px) {
    font-size: 20px;
  }
  


`
export const AmountOfFreePlaces = styled.p`
font-size: 20px;
color: rgba(66, 66, 66);
font-weight: 500;
text-align: right;
`



