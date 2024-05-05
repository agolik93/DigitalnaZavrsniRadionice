import Footer from "./layout/Footer";
import Navigacija from "./layout/Navigacija";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white py-4  h-1/6">
        <Navigacija />
      </header>
      <main className="bg-purple-200 py-8 flex-grow h-4/6 ">
        <Outlet />
      </main>
      <footer className="bg-blue-300 py-4 h-1/6">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
