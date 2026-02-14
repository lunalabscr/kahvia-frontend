import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import PostPage from "./pages/PostPage";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

export function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/:lang/*"
          element={
            <LanguageProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="post/:slug" element={<PostPage />} />
                  <Route path="product/:slug" element={<ProductPage />} />
                </Route>
              </Routes>
            </LanguageProvider>
          }
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
