import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import PostPage from "./pages/PostPage";
import "./index.css";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="post/:slug" element={<PostPage />} />
          <Route path="product/:slug" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
