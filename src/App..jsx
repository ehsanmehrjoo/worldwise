import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product.";
import Pricing from "./pages/Pricing.";
import Homepage from "./pages/Homepage.";
import AppLayout from "./pages/AppLayout.";
import Login from "./pages/Login.";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./Component/CityList."; // Corrected name
import City from "./Component/City"; 
import Form from "./Component/Form";
import CountryList from "./Component/CountryList";
 

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  
  function handelDeleteBtn (cityId){
    setCities(cities.filter(city => city.id !== cityId))
  }
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        
        console.log(res); // Add this line to inspect the response
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error); // Log the error details
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="https://translate.google.com/?hl=fa&sl=en&tl=fa&text=useNavigate%20%DB%8C%DA%A9%DB%8C%20%D8%A7%D8%B2%20%D9%87%D9%88%DA%A9%E2%80%8C%D9%87%D8%A7%DB%8C%20React%20Router%20%D8%A7%D8%B3%D8%AA%20%DA%A9%D9%87%20%D8%A8%D9%87%20%D8%B4%D9%85%D8%A7%20%D8%A7%D8%AC%D8%A7%D8%B2%D9%87%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D8%AF%20%D8%A7%D8%B2%20%D8%B7%D8%B1%DB%8C%D9%82%20%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA%20%D8%A8%D9%87%20%D8%B5%D9%81%D8%AD%D8%A7%D8%AA%20%D9%85%D8%AE%D8%AA%D9%84%D9%81%20%D8%AF%D8%B1%20%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%D9%86%20%D8%AE%D9%88%D8%AF%20%D9%86%D8%A7%D9%88%D8%A8%D8%B1%DB%8C%20(%DB%8C%D8%A7%20%D9%87%D8%AF%D8%A7%DB%8C%D8%AA)%20%DA%A9%D9%86%DB%8C%D8%AF.%20%D8%A7%DB%8C%D9%86%20%D9%87%D9%88%DA%A9%20%D8%A8%D9%87%E2%80%8C%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AF%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%DB%8C%20%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%20%D8%AF%D8%A7%D8%B1%D8%AF%20%DA%A9%D9%87%20%D8%B4%D9%85%D8%A7%20%D9%86%DB%8C%D8%A7%D8%B2%20%D8%AF%D8%A7%D8%B1%DB%8C%D8%AF%20%D8%A8%D8%B9%D8%AF%20%D8%A7%D8%B2%20%DB%8C%DA%A9%20%D8%B1%D9%88%DB%8C%D8%AF%D8%A7%D8%AF%20%D8%AE%D8%A7%D8%B5%20(%D9%85%D8%A7%D9%86%D9%86%D8%AF%20%D8%AB%D8%A8%D8%AA%20%D9%81%D8%B1%D9%85%20%DB%8C%D8%A7%20%DA%A9%D9%84%DB%8C%DA%A9%20%D8%B1%D9%88%DB%8C%20%DB%8C%DA%A9%20%D8%AF%DA%A9%D9%85%D9%87)%20%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%20%D8%B1%D8%A7%20%D8%A8%D9%87%20%D8%B5%D9%81%D8%AD%D9%87%E2%80%8C%D8%A7%DB%8C%20%D8%AF%DB%8C%DA%AF%D8%B1%20%D9%87%D8%AF%D8%A7%DB%8C%D8%AA%20%DA%A9%D9%86%DB%8C%D8%AF.%0A%0A&op=translate" replace/>} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} handelDeleteBtn={handelDeleteBtn}/>} />
          <Route path="cities/:id" element={<City />}/>
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
          <Route path="form" element={<Form />} /> 
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
