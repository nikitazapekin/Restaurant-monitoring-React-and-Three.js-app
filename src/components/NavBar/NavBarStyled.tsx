import styled from "styled-components"
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
        padding: 0 40px;
        @media screen and (max-width: 500px) {
            padding: 0 20px;
}
    `
export const NavbarLogo = styled.div`
 font-family: "Medula One", sans-serif;
    font-weight: 400;
font-size: 53px;
 cursor: pointer;
color: #000;

@media screen and (max-width: 500px) {
   font-size: 40px;
}
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

        @media screen and (max-width: 500px) {
    column-gap: 10px;

}
        
    `
export const NavbarListItem = styled.li`
    font-weight: 400;
font-size: 39px;
cursor: pointer;
position: relative;
color: #000;
@media screen and (max-width: 500px) {
    font-size: 20px;

}
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
