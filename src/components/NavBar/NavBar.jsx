


/*
import { NavBarBackground, NavBarBtn, NavBarBtns, NavBarComponent, NavBarContentArea, NavBarLogo, NavBarLogoImage } from "./NavBarStyled";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
     return (
          <NavBarComponent>
               <NavBarContentArea>
                    <NavBarLogo>
                         <Link to={`/`}>    <NavBarLogoImage src={Logo} alt="logo" /> </Link>
                    </NavBarLogo>
                    <NavBarBtns>
                         <Link to={`/restaurant`}>  <NavBarBtn>Our restaurant</NavBarBtn></Link>
                         <Link to={`/sign_in`}>   <NavBarBtn>Account</NavBarBtn> </Link>
                    </NavBarBtns>
               </NavBarContentArea>
               <NavBarBackground />
          </NavBarComponent>
     );
}
export default NavBar;
*/


//import { NavBarBackground, NavBarBtn, NavBarBtns, NavBarComponent, NavBarContentArea, NavBarLogo, NavBarLogoImage } from "./NavBarStyled";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

import { Navbar, NavbarInner, NavbarItem, NavbarList, NavbarListItem, NavbarLogo } from "./NavBarStyled";
const NavBar = () => {
     return (

          <>
               <Navbar>
                    <NavbarInner>
                         <NavbarItem>

                              <NavbarLogo>
                                   <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                                        The Niso
                                   </Link>
                              </NavbarLogo>
                         </NavbarItem>


                         <NavbarItem>
                              <NavbarList>
                                   <NavbarListItem>
                                        Home
                                   </NavbarListItem>
                                   <NavbarListItem>
                                        <Link to="/sign_in" style={{ textDecoration: "none", color: "#000" }}>
                                             Account
                                        </Link>
                                   </NavbarListItem>
                              </NavbarList>
                         </NavbarItem>
                    </NavbarInner>
               </Navbar>
          </>
     );
}
export default NavBar;
/*
<NavBarComponent>
<NavBarContentArea>
              <NavBarLogo>
                   <Link to={`/`}>    <NavBarLogoImage src={Logo} alt="logo" /> </Link>
              </NavBarLogo>
              <NavBarBtns>
                   <Link to={`/restaurant`}>  <NavBarBtn>Our restaurant</NavBarBtn></Link>
                   <Link to={`/sign_in`}>   <NavBarBtn>Account</NavBarBtn> </Link>
              </NavBarBtns>
              </NavBarContentArea>
              <NavBarBackground />
              </NavBarComponent>
         */