
import styled, { keyframes } from "styled-components";

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
`
export const RadialGradient = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(86.16% 64.2% at 32.35% 38.27%, rgb(15, 15, 15) 0%, rgb(117, 117, 117) 100%);
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

@media screen and (max-width: 700px) {
  margin-left: 50px;
}

@media screen and (max-width: 500px) {
margin: 0;
align-items: center;
text-align: center;
}
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