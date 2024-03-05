import styled from "styled-components";


//                                                          display: grid;
//                                                          grid-template-columns: 1fr minmax(100px, 300px);
//                                                          gap: 64px;
//                                                          align-items: center; 



export const Burger = styled.nav`
 height: 90px;
//width: 100%;
width: 100vw;

position: fixed;
z-index: 55;
//display: flex;
display: none;
@media screen and (max-width: 500px) {
  display: flex;
  align-items: center;
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


export const BurgerButton = styled.div`
  
  width: 30px;
height: 30px;
margin-left: 20px;
position: relative;
display: flex;
flex-direction: column;
gap: 10px;
z-index: 1111;
cursor: pointer;
`


export const BurgerButtonLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`

export const BurgerButtonSpan = styled.span`
  position: relative;
  display: block;
  width: 30px;
 
  top: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: black;
   
    transition: transform 0.3s ease;
  }

  &::before {
   top: 0;
 //  top: 10px
  }

  &::after {
    bottom: 0;
  }
`; 

 
export const Blur = styled.div`
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    position: absolute;
    left: 30%;
    @media screen and (max-width: 500px) {
      backdrop-filter: none;
}
`


export const MenuContent = styled.div`
    width: 30%;
    height: 100%;
    z-index: 11111;
  //  background-color: black;
  background-color: rgba(117, 118, 120);
    position: absolute;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 500px) {
  width: 100%;
}
`

export const MenuHeader = styled.div`
padding: 10px;
border-bottom: 1px solid white;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
//text-align: center;
`
export const MenuHeaderText = styled.h1`
  
  font-size: 3.5rem;
  color: white;
`
export const MenuHeaderStar =styled.img`
 // max-width: 200px;
 width: 100px ;
 height: auto
  
`
export const StyledMenuList = styled.ul`
  
  text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MenuListElement = styled.li`
    display: flex;
    align-items: center;
    margin: 10px;
`

export const  MenuListElementNavigate = styled.p`
    color: white;
    text-decoration: none;
font-size: 34px;
`

export const MenuWrapper = styled.div`
      z-index: 11111;
  position: fixed;
    width: 100vw;
    height: 100vh;
   top: 90px;

    left: 0;
//transform: translateX(-130%);
transform: ${props=> props.isActive ? " translateX(0%)" : " translateX(-130%)"};
transition: 0.2s;
`