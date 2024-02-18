import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutPage/aboutPage";
import RestaurantPage from "./pages/restaurantPage/restaurantPage";
import SignInPage from "./pages/signInPage/signInPage";
 
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
                  <Route path='/sign_in' element={<SignInPage />} />
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
//https://sketchfab.com/3d-models/restaurant-f8f8fb8c0c3549fa81802b36467be157
//https://sketchfab.com/3d-models/dna-alleys-restaurant-f35558b5f234433abb4ca45869dc6338
//https://sketchfab.com/3d-models/japanese-restaurant-lowpoly-e59abe484f9f4cbba3dc45f27485b223
//https://sketchfab.com/3d-models/low-poly-restaurant-e4326bf6f2324ccf828ce123871c7952
//https://sketchfab.com/3d-models/restaurant-in-golf-club-hampshire-318dd20c6abb4c119b6289da41dbafcd   много столов

// https://sketchfab.com/3d-models/restaurant-f8f8fb8c0c3549fa81802b36467be157 оптимизированная  и норм выглядит


//npx gltfjsx scene.gltf



//https://sketchfab.com/3d-models/free-018-kana-sitting-993eaa99578640e98dce99e40c8b5b5c


//https://sketchfab.com/3d-models/numbers-a0dd45a3d7e149bd8d0756aea16bb400 NUMBERS