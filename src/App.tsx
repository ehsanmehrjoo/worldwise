import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepages from "./pages/Homepages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hallo Router</h1>

        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
