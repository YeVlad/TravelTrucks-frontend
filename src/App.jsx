import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CatalogItemPage from "./pages/CatalogItempage/CatalogItempage";
import CatalogPage from "./pages/Catalogpage/Catalogpage";

import Header from "./components/Header/Header";

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItemPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
