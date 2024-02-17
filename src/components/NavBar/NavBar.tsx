import { NavBarBackground, NavBarBtn, NavBarBtns, NavBarComponent, NavBarContentArea, NavBarLogo, NavBarLogoImage } from "./NavBarStyled";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <NavBarComponent>
            <NavBarContentArea>
                <NavBarLogo>
                <Link to={`/`}>    <NavBarLogoImage src={Logo} alt="logo" /> </Link>
                </NavBarLogo>
                <NavBarBtns>
                <Link to={`/about`}><NavBarBtn>About</NavBarBtn></Link>
                <Link to={`/restaurant`}>  <NavBarBtn>Our restaurant</NavBarBtn></Link>
                <Link to={`/sign_in`}>   <NavBarBtn>Sign in</NavBarBtn> </Link>
                <Link to={`/sign_up`}>   <NavBarBtn>Sign up</NavBarBtn></Link>
                </NavBarBtns>
            </NavBarContentArea>
            <NavBarBackground />
        </NavBarComponent>
    );
}

export default NavBar;