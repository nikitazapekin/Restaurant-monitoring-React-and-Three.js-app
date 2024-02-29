


import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
//import { NavBarMobile, NavBarMobileVersion } from "../../components/NavBarMobile/NavBarMobileStyled";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
//import useOutsideClick from './useOutsideClick';
import { useState } from "react";
//import "./homepage.scss"
const Homepage = () => {
return ( 
     <>
{/*
*/}
<NavBar />
<NavBarMobileComponent /> 
<Layout>
<WelcomeForm />
     <Global />
     <Footer />
     </Layout> 
</>
     );
}
 
export default Homepage;
