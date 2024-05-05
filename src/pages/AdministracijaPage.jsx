import { NavLink, Outlet } from "react-router-dom";
import { useStore } from "../store";

const AdministracijaPage = () => {
  const setHandleOpen = useStore((state) => state.setHandleOpen);

  return (
    <div className="flex flex-col items-center">
      <ul className="flex justify-evenly items-center w-4/5 my-5 border-4 border-blue-300 rounded-xl">
        <li>
          <NavLink
            to="radionice"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium"
                : "font-medium text-blue-600 dark:text-blue-500 hover:underline"
            }
          >
            Radionice
          </NavLink>
        </li>
        <li>
          <NavLink
            to="predavaci"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium"
                : "font-medium text-blue-600 dark:text-blue-500 hover:underline"
            }
          >
            Predavaci
          </NavLink>
        </li>
        <li>
          <NavLink
            to="organizacije"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium"
                : "font-medium text-blue-600 dark:text-blue-500 hover:underline"
            }
          >
            Organizacije
          </NavLink>
        </li>
        <li>
          <NavLink
            to="teme"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium"
                : "font-medium text-blue-600 dark:text-blue-500 hover:underline"
            }
          >
            Teme
          </NavLink>
        </li>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none "
          onClick={() => setHandleOpen(true)}
        >
          +Dodaj
        </button>
      </ul>
      <div className="min-w-full p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AdministracijaPage;
