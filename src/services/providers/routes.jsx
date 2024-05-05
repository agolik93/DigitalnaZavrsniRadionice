import { createBrowserRouter } from "react-router-dom";
import RadionicaPage from "../../pages/RadionicaPage";
import NotFound from "../../pages/NotFound";
import PredavaciPage from "../../pages/PredavaciPage";
import Pocetna from "../../pages/Pocetna";
import Layout from "../../components/Layout.jsx";

import AdministracijaPage from "../../pages/AdministracijaPage.jsx";
import TemeSubPage from "../../pages/subpages/TemeSubPage.jsx";
import OrganizacijeSubPage from "../../pages/subpages/OrganizacijeSubPage.jsx";
import RadionicaSubPage from "../../pages/subpages/RadionicaSubPage.jsx";
import PredavaciSubPage from "../../pages/subpages/PredavaciSubPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Pocetna />,
      },
      {
        path: "radionice",
        element: <RadionicaPage />,
      },
      {
        path: "predavaci",
        element: <PredavaciPage />,
      },
      {
        path: "administracija",
        element: <AdministracijaPage />,
        children: [
          {
            path: "",
            element: <RadionicaSubPage />,
          },
          {
            path: "radionice",
            element: <RadionicaSubPage />,
          },
          {
            path: "predavaci",
            element: <PredavaciSubPage />,
          },
          {
            path: "teme",
            element: <TemeSubPage />,
          },
          {
            path: "organizacije",
            element: <OrganizacijeSubPage />,
          },
        ],
      },
      {
        path: "/predavaci/:id",
        element: <RadionicaPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
