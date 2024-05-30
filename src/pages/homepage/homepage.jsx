


import Background from "../../components/Background";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
import "./homepage.scss"

const Homepage = () => {
  return (
    <>
 <NavBar />
 <WelcomeForm />
 <Background />
    </>
  );
}

export default Homepage;
