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
                <Link to={`/restaurant`}>  <NavBarBtn>Our restaurant</NavBarBtn></Link>
                <Link to={`/sign_in`}>   <NavBarBtn>Account</NavBarBtn> </Link>
                </NavBarBtns>
            </NavBarContentArea>
            <NavBarBackground />
        </NavBarComponent>
    );
}
export default NavBar;