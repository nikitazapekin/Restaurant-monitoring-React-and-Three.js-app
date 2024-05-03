
import styled, { keyframes } from "styled-components";


/*
export const WelcomeFormStyled = styled.div`
    width: 70%;
    position: relative;
    height: auto;
    padding: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 500px) {
      padding: 15px;
    }
`
export const LeftSideStarImage = styled.img`
max-width: 150px;
//max-height: 150px;
height: auto;
width: 100%;
position: absolute;
left: 0;
bottom: 0;
z-index: 123;
transform: rotate(30deg);
`
export const WelcomeFormBackgroundStyled = styled.div`
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
export const WelcomeFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const WelcomeTitle = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    position: relative;
    z-index: 123;
  font-size: 48px;
`
export const WelcomeTables = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    font-size: 32px;
    position: relative;
    z-index: 123;
  font-size: 32px;
`
export const WelcomeFormContent = styled.form`
position: relative;
    width: 100%;
   min-height: 200px;
    display: flex;
    justify-content:space-between;
    background-color: #b9b9b9;
    align-items: center;
    border-radius: 20px;
`
export const ManImage = styled.img`
max-width: 400px;
width: 100%;
height: auto;
    position: relative;
    `
export const MessageWrapper = styled.div`
    width: 60%;
    min-height: 200px;
    
    `
export const WelcomeMessage = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    min-height: 200px;
    position: relative;
    user-select: none;
    text-align: center;
    margin-right:20px;
    padding: 5px;
    border-radius: 20px;
    font-size: 32px;
    color: black;
    z-index: 111;
    `

export const WelcomeFormMessageBackground = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #fff;
border-radius:20px;
//opacity: 0.3;

z-index: -11;
`
export const StarWrapper = styled.div`
max-width: 100px;
max-height: 100px;
cursor: pointer;
position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
top: 0;
right: 0;
    `
export const RigthTopStar = styled.img`
    z-index: 124;
transform: rotate(30deg);

position: absolute;
flex: 0 0 100px;
top: 0;
right: 0;
max-width: 100px;
max-height: 100px;
`
export const RigthBottomStar = styled.img`
  max-width: 100px;
  height: auto;
  position: absolute;
  right: 0;
  z-index: 123;
 bottom: 0;
  transform: rotate(-30deg);
`
export const LeftTopStar = styled.img`
  position: absolute;
  left: 0;
  z-index: 123;
top: 0;
transform: rotate(-30deg);
flex: 1 1 300px;
min-width: 100px;
width: 100%;
`
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg)
  }
`;

export const StarsBlock = styled.div`
display: grid;
grid-template-columns: repeat(6, minmax(50px, 1fr));
gap: 20px;
justify-content: center;
@media screen and (max-width: 650px) {
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  height: 100px;
  overflow-y: hidden;
  row-gap: 100px;
}
`
export const StarCard = styled.div`
max-width: 300px;
max-height: 300px;
min-width: 50px;
cursor: pointer;
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
    transition: 1s ease-in-out;
    &:hover {
     // animation: ;
     animation: ${rotateAnimation} 1s linear forwards;
    //  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`
export const StarImage = styled.img`
  width: 100%;
  height: 100%;
`
export const StarImageBottomLeft = styled.div`
flex: 0 0 200px;
height: auto;
width: 100%;

`
export const StarImageElement = styled.img`
  object-fit: cover;
  object-position: center;
`


export const StarLeftTop = styled.div`
display: grid;
position: absolute;
z-index:444;
left: 0;
top: 0;
grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
transform: translate(-50px, -50px) rotate(45deg);
`
export const StarRightTop = styled.div`
display: grid;
position: absolute;
z-index:444;
right: 0; 
top: 0;
grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
transform: translate(50px, -50px) rotate(-45deg);
//transform: rotate(-45deg);
`
export const StarLeftBottom = styled.div`
display: grid;
position: absolute;
z-index:444;
left: 0; 
bottom: 0;
grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
//transform: rotate(-45deg);
transform: translate(-50px, 50px) rotate(45deg);


`
export const StarRightBottom = styled.div`
display: grid;
position: absolute;
z-index:444;
right: 0; 
bottom: 0;
grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
transform: translate(50px, 50px) rotate(-45deg);
`
export const StarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`

*/

export const RestaurantComponent = styled.main`

height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: -1;
width: 100%;

`
export const RestaurantComponentBackground = styled.img`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
//z-index: 11;

`
export const RadialGradient = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(86.16% 64.2% at 32.35% 38.27%, rgb(15, 15, 15) 0%, rgb(117, 117, 117) 100%);
 // background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`
export const RestaurantComponentInner = styled.div`
display: flex;
flex-direction: column;
position: relative;
z-index: 111;

display: flex;
justify-content: center;
height: 100%;
margin-left: 140px;
`

export const RestaurantComponentItem = styled.div`
max-width: 810px;
 
`
export const RestaurantComponentTitle = styled.h1`
font-weight: 400;
font-size: 83px;
color: #e0b574;
font-family: "Mohave", sans-serif;
`


export const RestaurantComponentSubtitle = styled.span`
font-weight: 400;
font-size: 114px;
color: #e0b574;
font-family: "Medula One", sans-serif;
`

export const RestaurantComponentAbout = styled.h2`
font-weight: 400;
font-size: 57px;
color: #e0b574;
font-family: "Mohave", sans-serif;
`
export const RestaurantComponentBtn = styled.button`
border: 3.59px solid #e0b574;
border-radius: 48px;
padding: 7px 102px;
font-weight: 400;
font-size: 38px;
 
color: #e0b574;
background-color: transparent;
font-family: "Mohave", sans-serif;
cursor: pointer;
margin-top: 28px;
`
export const RestaurantComponentReserve = styled.h3`
 
color: #e0b574;
font-family: "Mohave", sans-serif;



font-weight: 400;
font-size: 43px;
text-decoration: underline;
text-decoration-skip-ink: none;
cursor: pointer;
margin-top: 28px;
 
`