import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutPage/aboutPage";
import RestaurantPage from "./pages/restaurantPage/restaurantPage";
import SignInPage from "./pages/signInPage/signInPage";
import PersonalPage from "./pages/personalPage/personalPage";
import PersonalFormOffersPage from "./pages/personalFormOffersPage";
import useHistoryTables from "./hooks/useHistoryTables";
import { useEffect, useState } from "react";
const App = () => {
  const {handleTest} = useHistoryTables()
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
                  <Route path='/personal/:id' element={<PersonalPage />} />
                  <Route path='/yourOffers/:id' element={<PersonalFormOffersPage />} />
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
//  "dev": "vite",
 //docker build -f Dockerfile.dev -t react-client:1.0 .
//docker run -d -p 5173:5173 react-client:1.0 





//docker-compose up app-dev --build

 