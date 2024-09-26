import { CitiesProvider } from "./contexts/CitiesContext";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

import Product from "./pages/Product.";
import Pricing from "./pages/Pricing.";
import Homepage from "./pages/Homepage.";
import AppLayout from "./pages/AppLayout.";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./Component/CityList."; // Corrected name
import City from "./Component/City"; 
import Form from "./Component/Form";
import CountryList from "./Component/CountryList";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname.split("/")[1] || "Homepage";
    document.title = `WorldWise | ${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}`;

    return () => {
      document.title = "WorldWise // Keep track of your adventures";
    };
  }, [location]);

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="cities" replace />} />
        <Route path="cities" element={<CityList />} />
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList />} />
        <Route path="form" element={<Form />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;