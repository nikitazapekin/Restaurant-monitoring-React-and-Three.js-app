import { LogoImage, NavBarAsidePanel, NavBarAsidePanelBackground, NavBarAsidePanelElement, NavBarBackground, NavBarMobile, NavBarMobileElement, NavBarMobileInput, NavBarMobileVersion } from "./NavBarMobileStyled";
import { useEffect, useRef } from "react";
import Logo from "../../assets/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBarMobileComponent = () => {
  const NavBar = useRef(null);
  const [navbarWidth, setNavbarWidth] = useState(-4000);
  const [isOpenNavBar, setIsOpenNavBar] = useState(true)

  
  useEffect(() => {
    if (NavBar.current) {
      setNavbarWidth(NavBar.current.offsetWidth);
    }
  }, [NavBar]);
  const handleOpen = () => {
    setIsOpenNavBar(prev=> !prev)
  }


  return (
    <NavBarMobileElement>
    <>
      <NavBarMobileVersion>
        <NavBarBackground />
        <NavBarMobile onClick={handleOpen}>
      
        </NavBarMobile>
        <Link to={`/`}> 
        <LogoImage alt="logo" src={Logo} />
        </Link>
      </NavBarMobileVersion>
      <NavBarAsidePanel ref={NavBar} 
isOpenNavBar={isOpenNavBar}
      navbarWidth={navbarWidth}
      >
        <NavBarAsidePanelBackground />
        <NavBarAsidePanelElement>
      <Link to="/restaurant">
           Our restaurant
        </Link> 
        </NavBarAsidePanelElement>
        <NavBarAsidePanelElement>
        <Link to={`/sign_in`}>      Account </Link>
        </NavBarAsidePanelElement>
      </NavBarAsidePanel>
    </>
    </NavBarMobileElement>
  );
}

export default NavBarMobileComponent;