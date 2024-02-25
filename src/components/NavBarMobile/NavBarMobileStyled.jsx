import styled from "styled-components";
export const NavBarMobile =styled.div`
width:  60px;
height: 60px;
background-color: #fff;
border: 3px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
cursor: pointer;    
border-radius: 10px;
`
export const NavBarMobileLineFirst = styled.div`
width: 90%;
height: 3px;
background-color: black;
`

export const NavBarMobileLineSecond = styled.div`
width: 90%;
height: 3px;
background-color: black;
`
export const NavBarMobileLineThird= styled.div`
width: 90%;
height: 3px;
background-color: black;
`
export const NavBarMobileVersion = styled.div`
width: 100%;
height: 80px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 30px;
padding-right: 30px;
/*
display: grid;
grid-template-columns: 1fr minmax(100px, 300px);
gap: 64px;
align-items: center; 
*/
`
export const NavBarMobileInput = styled.input`
height: 60px;
border: none;
outline: none;
border-radius: 20px;
font-size: 20px;
cursor: pointer;
`
export const NavBarAsidePanel = styled.aside`
    height: 100vh;
 //   background-color: rgba(59, 58, 58);
    position: absolute;
    z-index: 1234;
    transition: 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
  transform: translateX(-${props =>props.isOpenNavBar ? props.navbarWidth : 0}px);
width: 100%;
    @media (max-width: 400px) {
        width: 100%; 
    }
`

export const NavBarAsidePanelBackground = styled.div`
  position: absolute;
width: 100%;
height: 100%;
background-color: rgba(165, 173, 167);
//opacity: 0.3;
z-index: 1234;
`
export const NavBarAsidePanelElement = styled.div`
width: 100%;
height: auto;
padding: 30px;
background-color: rgba(168, 165, 165);
color: #fff;
position: relative;
z-index: 1234;
font-size: 32px;
cursor: pointer;
transition: 1s ease-in-out;
&:hover {
  background-color: rgba(107, 105, 105);
}
`
export const NavBarBackground = styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0 ;
left:  0;
opacity: 0.4;
background-color: rgba(202, 204, 219);
z-index: -1;
`


export const LogoImage = styled.img`
  
  width: 60px;
  height: 60px;
  position: relative;
z-index: 1234;

    border-radius: 10px;


`

export  const NavBarMobileElement = styled.div`
display: none;
@media screen and (max-width: 500px) {
  display: block;
}
`