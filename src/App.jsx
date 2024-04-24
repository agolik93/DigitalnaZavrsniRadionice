import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigacija from "./components/Navigacija.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Radionice from "./pages/Radionice.jsx";
import Predavaci from "./pages/Predavaci.jsx";
import Administracija from "./pages/Administracija.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const Layout = ({ children }) => (
  <div className="flex flex-col h-dvh">
    <div className="h-1/6">
      <Navigacija />
    </div>
    <div className="h-4/6">{children}</div>
    <div className="h-1/6">
      <Footer />
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Pocetna />
        </Layout>
      ),
      errorElement: (
        <Layout>
          <NotFound />
        </Layout>
      ),
    },
    {
      path: "/radionice",
      element: (
        <Layout>
          <Radionice />
        </Layout>
      ),
    },
    {
      path: "/predavaci",
      element: (
        <Layout>
          <Predavaci />
        </Layout>
      ),
    },
    {
      path: "/administracija",
      element: (
        <Layout>
          <Administracija />
        </Layout>
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
