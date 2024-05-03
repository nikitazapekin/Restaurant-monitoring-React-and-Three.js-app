


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
{/*
      <NavBar />
      <NavBarMobileComponent />
      <Layout>
        <WelcomeForm />
        <Global />
        <Footer />
        </Layout>
  */}
    </>
  );
}

export default Homepage;
