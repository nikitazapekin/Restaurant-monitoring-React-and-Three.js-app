import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
import RestaurantPreview from "../../components/restaurantPreview/restaurantPreview";
import { Global } from "../../consts/GlobalStyles";

const RestaurantPage = () => {
    return (
        <>
        <NavBar />
        <NavBarMobileComponent />
        <Global />
        <RestaurantPreview />
        <Footer  />
        </>
      );
}
 
export default RestaurantPage;