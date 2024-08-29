import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepages from "./pages/Homepages";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    // < div>
    //     <h1>Hallo Router</h1>
    <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
     
    </BrowserRouter> 
    // </div>
  );
}

export default App;
