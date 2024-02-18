import styled from "styled-components"
export const NavBarComponent = styled.nav`
    width: 100%;
    height: 70px;
    position: relative;
`
export const NavBarBackground = styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0 ;
left:  0;
opacity: 0.4;
background-color: rgba(202, 204, 219);
`
export const NavBarContentArea = styled.div`
    max-width: 80%;
    width: 100%;
   position: relative;
    height: 70px;
    margin: 0 auto;
    
display: flex;
align-items: center;
justify-content: space-between;
`
export const NavBarLogo = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 123;
    border-radius: 10px;

`
export const NavBarLogoImage = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
`
export const NavBarBtns  = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
 
gap: 30px;


`
export const NavBarBtn = styled.div`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    font-size: 32px;
    position: relative;
    z-index: 123;
    cursor: pointer;
` 
 