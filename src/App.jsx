import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Navigacija from "./components/Navigacija.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Radionice from "./pages/Radionice.jsx";
import Predavaci from "./pages/Predavaci.jsx";
import Administracija from "./pages/Administracija.jsx";
import axios from "axios";
import { useQuery } from "react-query";
import { useStore } from "./store.jsx";

async function fetchData() {
  const [radioniceResponse, temeResponse, tezineResponse, predavaciResponse] =
    await Promise.all([
      axios.get("http://localhost:3000/radionice"),
      axios.get("http://localhost:3000/teme"),
      axios.get("http://localhost:3000/tezine"),
      axios.get("http://localhost:3000/predavaci"),
    ]);

  const radioniceData = radioniceResponse.data;
  const temeData = temeResponse.data;
  const predavaciData = predavaciResponse.data;
  const tezineData = tezineResponse.data;

  return { radioniceData, temeData, tezineData, predavaciData };
}

const App = () => {
  const { isLoading, isError } = useQuery("allData", fetchData);
  const odabraniPredavac = useStore((state) => state.odabraniPredavac);
  const setOdabraniPredavac = useStore((state) => state.setOdabraniPredavac);
  const routePath = odabraniPredavac ? `/predavaci/${odabraniPredavac}` : "/";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navigacija />
          <Pocetna />
          <Footer />
        </>
      ),
      errorElement: (
        <>
          <Navigacija />
          <NotFound />
          <Footer />
        </>
      ),
    },
    {
      path: "/radionice",
      element: (
        <>
          <Navigacija />
          <Radionice />
          <Footer />
        </>
      ),
    },
    {
      path: "/predavaci",
      element: (
        <>
          <Navigacija />
          <Predavaci />
          <Footer />
        </>
      ),
    },

    {
      path: "/administracija",
      element: (
        <>
          <Navigacija />
          <Administracija />
          <Footer />
        </>
      ),
    },
    {
      path: routePath,
      element: (
        <>
          <Link to="/predavaci" onClick={() => setOdabraniPredavac("")}>
            {odabraniPredavac} Vrati se
          </Link>
          <Radionice />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
