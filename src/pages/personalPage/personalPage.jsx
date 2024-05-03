


import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
import PersonalForm from "../../components/PersonalForm/personalForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
const PersonalPage = () => {
    return ( <>
    <NavBar />
    <PersonalForm />
    {/*
    <Layout>
    <NavBar />
    <NavBarMobileComponent />
    <Global /> 
    <PersonalForm />
    <Footer />
    </Layout>
    */}
    </>
     );
}
 
export default PersonalPage;