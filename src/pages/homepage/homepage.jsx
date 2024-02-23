


import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
import { NavBarMobile, NavBarMobileVersion } from "../../components/NavBarMobile/NavBarMobileStyled";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
const Homepage = () => {
    return ( 
        <>
       <NavBar />
       <Layout>
       <WelcomeForm />
      <Global />
       <Footer />
       </Layout> 
 

{/*<NavBarMobileComponent /> */}


</>
     );
}
 
export default Homepage;
