import Footer from "../components/Footer/footer";
import NavBar from "../components/NavBar/NavBar";
import PersonalFormOffers from "../components/PesonalFormOffers/personalFormOffers";
import { Global } from "../consts/GlobalStyles";
import { Layout } from "./pages.styles";

const PersonalFormOffersPage = () => {
    return ( <>
    <Layout>

        <NavBar  />
        <Global />
        <PersonalFormOffers />
        <Footer />
    </Layout>

    </> );
}
 
export default PersonalFormOffersPage;
 