import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import LandingPage from "../components/LandindPage/LandingPage.jsx";

/*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch() //despachar todas las películas
    }, [dispatch]) 
*/

export const AppRouter = () => {
  return (
    <div>
      <div>
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          {/* {Todas las rutas deben ir aquí} */}
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
};
