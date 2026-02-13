import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

const Layout = () => {
  useScrollToAnchor();

  return (
    <div className="bg-white min-h-screen text-neutral-900 font-sans selection:bg-primary-100 selection:text-primary-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
