 import { CitiesProvider  } from "./contexts/CitiesContext"
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
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
 


function App() {


  return (
    <CitiesProvider>
    <AuthProvider>

    
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={
          <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute> }>
          <Route index element={<Navigate to="cities" replace/>} />
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<City />}/>
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} /> 
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
