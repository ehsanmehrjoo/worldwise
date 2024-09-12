 import { CitiesProvider ,  CitiesContext } from "./contexts/CitiesContext"
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
 


function App() {


  return (
    <CitiesProvider>

    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace/>} />
          <Route path="cities" element={<CityList
          //  cities={cities} isLoading={isLoading} handelDeleteBtn={handelDeleteBtn}

           />} />
          <Route path="cities/:id" element={<City />}/>
          <Route path="countries" element={<CountryList 
          // cities={cities} isLoading={isLoading}

          />} />
          <Route path="form" element={<Form />} /> 
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
