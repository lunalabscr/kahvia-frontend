import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import "./index.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="post/:slug" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
