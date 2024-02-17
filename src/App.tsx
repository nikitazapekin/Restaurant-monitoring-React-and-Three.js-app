import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutPage/aboutPage";
import RestaurantPage from "./pages/restaurantPage/restaurantPage";
//import { Footer, Navbar } from "./components";
//import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>

 
   <Router>
 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/restaurant' element={<RestaurantPage />} />
                </Routes>
         
              </>
            }
          />
        </Routes>
        </Router> 
    </main>
  );
};

export default App;
