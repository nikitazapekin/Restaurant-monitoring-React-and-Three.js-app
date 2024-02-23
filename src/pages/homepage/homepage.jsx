


import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";
import { gql, useSubscription } from '@apollo/client';
const USER_CREATED_SUBSCRIPTION = gql`
subscription {
userCreated {
  id
  username
}
}
`;
const Homepage = () => {
   
    return ( 
        <>
       <NavBar />
       <Layout>
       <Global />
       <WelcomeForm />
       <Footer />
    </Layout> 

</>
     );
}
 
export default Homepage;