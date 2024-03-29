import NavBar from "../../components/NavBar/NavBar";
import { Layout } from "../pages.styles";
import Footer from "../../components/Footer/footer";
import { Global } from "../../consts/GlobalStyles";
import AuthForm from "../../components/AuthForm/AuthForm";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";

const SignInPage = () => {
    return ( 
        <>
        <Layout>
<NavBarMobileComponent />
        <NavBar />
        <AuthForm />
        <Footer />
        <Global />
        </Layout>
        </>
     );
}
 
export default SignInPage;