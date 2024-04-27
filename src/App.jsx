import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigacija from "./components/Navigacija.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Radionice from "./pages/Radionice.jsx";
import Predavaci from "./pages/Predavaci.jsx";
import Administracija from "./pages/Administracija.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navigacija /> <Pocetna />
          <Footer />
        </div>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/radionice",
      element: (
        <div>
          <Navigacija />
          <Radionice />
          <Footer />
        </div>
      ),
    },
    {
      path: "/predavaci",
      element: (
        <div>
          <Navigacija />
          <Predavaci />
          <Footer />
        </div>
      ),
    },
    {
      path: "/administracija",
      element: (
        <div>
          <Navigacija />
          <Administracija />
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
