import styled from "styled-components"



/*
export const NavBarComponent = styled.nav`
    width: 100%;
    height: 70px;
    position: relative;
    @media screen and (max-width: 500px) {
display: none;
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
 */





export const Navbar = styled.header`
    width: 100%;
    height: auto;

    `

export const NavbarInner = styled.nav`
        
        width: 100%;
        height: 84px;
        background-color:  #E0B574;
        border-radius: 0 0 20px 20px;
        display: flex;
        justify-content: space-between;
        padding: 0 40px
    `
export const NavbarLogo = styled.div`
 font-family: "Medula One", sans-serif;
    font-weight: 400;
font-size: 53px;
 cursor: pointer;
color: #000;
`
export const NavbarItem = styled.div`
        display: flex;
        height: 84px;
        align-items: center;
    `
export const NavbarList = styled.ul`
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        column-gap: 45px;
        
    `
export const NavbarListItem = styled.li`
    font-weight: 400;
font-size: 39px;
cursor: pointer;
position: relative;
color: #000;
    font-family: "Mohave", sans-serif;;
    &:hover::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;  
    }
`
