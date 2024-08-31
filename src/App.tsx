import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepages from "./pages/Homepages";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout"
 
function App() {
  return (
  
    
    <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
     
    </BrowserRouter> 
 
  );
}

export default App;
