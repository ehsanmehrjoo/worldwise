import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./pages/Product.";
import Pricing from "./pages/Pricing.";
import Homepage from "./pages/Homepage.";
import AppLayout from "./pages/AppLayout.";
import Login from "./pages/Login.";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./Component/CityList."; // Corrected name
import City from "./Component/City"; 
import Form from "./Component/Form.";
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
          <Route index element={<CityList cities={cities} isLoading={isLoading} handelDeleteBtn={handelDeleteBtn}/>} />
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
