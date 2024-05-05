import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { useEffect } from "react";

const Navigacija = () => {
  const adminState = useStore((state) => state.adminState);
  const adminToggle = useStore((state) => state.adminToggle);

  const handleAdminToggle = () => {
    adminToggle();
  };
  const navigate = useNavigate(); // Get reference to navigate function

  const handleNonAdminRedirect = () => {
    if (!adminState) {
      navigate("/");
    }
  };

  useEffect(() => {
    handleNonAdminRedirect();
  }, [adminState]);

  return (
    <div className="h-full flex justify-between items-center">
      <ul className="flex justify-evenly w-4/5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Pocetna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/radionice"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Radionice
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/predavaci"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Predavaci
          </NavLink>
        </li>
        {adminState && (
          <li>
            <NavLink
              to="/administracija"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Administracija
            </NavLink>
          </li>
        )}
      </ul>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={adminState}
          className="sr-only peer"
          onChange={handleAdminToggle}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Administrator
        </span>
      </label>
    </div>
  );
};

export default Navigacija;
