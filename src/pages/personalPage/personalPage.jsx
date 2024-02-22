import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import PersonalForm from "../../components/PersonalForm/personalForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
const PersonalPage = () => {
    return ( <>
    <Layout>
    <NavBar />
    <Global /> 
    <PersonalForm />
    <Footer />
    </Layout>
    </>
     );
}
 
export default PersonalPage;