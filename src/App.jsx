import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CatalogItemPage from "./pages/CatalogItempage/CatalogItempage";
import CatalogPage from "./pages/Catalogpage/Catalogpage";

import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:trackId" element={<CatalogItemPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
