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
export const NavBarMobileLine = styled.div`
width: 90%;
height: 3px;
background-color: black;
`
export const NavBarMobileVersion = styled.div`
width: 100%;
height: 80px;
padding-left: 30px;
padding-right: 30px;
background-color: gray;
position: relative;
display: grid;
grid-template-columns: 1fr minmax(100px, 300px);
gap: 64PX;
align-items: center;
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
  //  width: 300px;
  width: 50%;
    background-color: rgba(59, 58, 58);
    position: absolute;
    transition: 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const NavBarAsidePanelElement = styled.div`
width: 100%;
height: auto;
padding: 30px;
background-color: rgba(43, 43, 43);
color: #fff;
font-size: 32px;
cursor: pointer;
`