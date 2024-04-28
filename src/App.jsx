import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigacija from "./components/Navigacija.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Radionice from "./pages/Radionice.jsx";
import Predavaci from "./pages/Predavaci.jsx";
import Administracija from "./pages/Administracija.jsx";
import axios from "axios";
import { useQuery } from "react-query";

async function fetchData() {
  try {
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
  } catch (error) {
    throw new Error(error.message);
  }
}

const App = () => {
  useQuery("allData", fetchData);

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

  return <RouterProvider router={router} />;
};

export default App;
