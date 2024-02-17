import NavBar from "../../components/NavBar/NavBar";
import RestaurantPreview from "../../components/restaurantPreview/restaurantPreview";
import { Global } from "../../consts/GlobalStyles";

const RestaurantPage = () => {
    return (
        <>
        <NavBar />
        <Global />
        <RestaurantPreview />
        </>
      );
}
 
export default RestaurantPage;