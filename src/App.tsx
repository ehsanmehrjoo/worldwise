import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound";
import Ctiylist from "./Component/CityList";
import { useEffect, useState } from "react";
 const BASE_URL = "http://localhost:9000/cities"
function App() {
  const [cities, setCities] = useState({});
  const [isLoding , setIsLoding] = useState(false);

  useEffect(function(){
    async function fetchCities() {
      try{
        setIsLoding(true)
         const res =  await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data); 
      }
    catch  {
      alert("There was an error loading data...")
    }finally{
      setIsLoding(false)
    }
    }
 
  },[cities])
  return (


    <BrowserRouter>


      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<AppLayout />} > 

           <Route index element={<Ctiylist/>} />
           <Route path="cities" element={<Ctiylist/>} />
           <Route path="countries" element={<p>Countries</p>} />           
           <Route path="form" element={<p>Form</p>} />

        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
