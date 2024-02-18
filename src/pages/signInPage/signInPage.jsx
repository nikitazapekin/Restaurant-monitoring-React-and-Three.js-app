import NavBar from "../../components/NavBar/NavBar";
import { Layout } from "../pages.styles";
import Footer from "../../components/Footer/footer";
import { Global } from "../../consts/GlobalStyles";
import AuthForm from "../../components/AuthForm/AuthForm";

const SignInPage = () => {
    return ( 
        <>
        <Layout>

        <NavBar />
        <AuthForm />
        <Footer />
        <Global />
        </Layout>
        </>
     );
}
 
export default SignInPage;