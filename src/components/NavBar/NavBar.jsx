                                   /*
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
                                        <Link to="/sign_in" style={{ textDecoration: "none", color: "#000" }}>
                                   <NavbarListItem>
                                             Account
                                   </NavbarListItem>
                                        </Link>
                              </NavbarList>
                         </NavbarItem>
                    </NavbarInner>
               </Navbar>
          </>
     );
}
export default NavBar;

*/
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.scss"
import { Navbar, NavbarInner, NavbarItem, NavbarList, NavbarListItem, NavbarLogo } from "./NavBarStyled";
const NavBar = () => {
     return (
          <>
               <header className={styles.header}>
                    <div className={styles.header__inner}>
                         <h1 className={styles.header__logo}>
                              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                                   The Niso
                              </Link>
                         </h1>

                         <ul className={styles.header__btns}>
                              <li className={styles.header__btn}>
                                   <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                                        Home
                                   </Link>
                              </li>
                              <li className={styles.header__btn}>
                                   <Link to="/sign_in" style={{ textDecoration: "none", color: "#fff" }}>
                                        Account
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className={styles.header__background}> </div>

               </header>
          </>
     );
}
export default NavBar;
/*
*/


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