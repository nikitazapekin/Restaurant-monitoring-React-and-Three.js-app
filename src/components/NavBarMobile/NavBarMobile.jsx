import { NavBarAsidePanel, NavBarAsidePanelElement, NavBarMobile, NavBarMobileInput, NavBarMobileLine, NavBarMobileVersion } from "./NavBarMobileStyled";
import { useRef } from "react";
const NavBarMobileComponent = () => {
 
 const NavBar = useRef() 
  return (
    <>
      <NavBarMobileVersion>
        <NavBarMobile>
          <NavBarMobileLine />
          <NavBarMobileLine />
          <NavBarMobileLine />
        </NavBarMobile>
      </NavBarMobileVersion>
      <NavBarAsidePanel ref={Navbar} >
        <NavBarAsidePanelElement>
Our restaurant
        </NavBarAsidePanelElement>
        <NavBarAsidePanelElement>
Account
        </NavBarAsidePanelElement>
      </NavBarAsidePanel>
    </>
  );
}

export default NavBarMobileComponent;