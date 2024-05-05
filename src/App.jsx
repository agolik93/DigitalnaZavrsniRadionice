import { RouterProvider } from "react-router-dom";
import { router } from "./services/providers/routes.jsx";
import QueryProvider from "./services/providers/QueryProvider.jsx";

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

export default App;
