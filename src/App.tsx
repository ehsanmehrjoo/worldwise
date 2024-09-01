import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepages from "./pages/Homepage";
import AppLayout from "./pages/AppLayout"
import Login from "./pages/"
import PageNotFound from "./pages/PageNotFound";
 
function App() {
  return (
  
    
    <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
     
    </BrowserRouter> 
 
  );
}

export default App;
