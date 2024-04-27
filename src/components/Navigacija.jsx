import { Link } from "react-router-dom";
import { useStore } from "../store";

const Navigacija = () => {
  const adminState = useStore((state) => state.adminState);
  const adminToggle = useStore((state) => state.adminToggle);

  const handleAdminToggle = () => {
    adminToggle();
  };

  return (
    <div className="h-full flex justify-between items-center">
      <ul className="flex justify-evenly w-4/5">
        <li>
          <Link to="/">Pocetna</Link>
        </li>
        <li>
          <Link to="/radionice">Radionice</Link>
        </li>
        <li>
          <Link to="/predavaci">Predavaci</Link>
        </li>
        {adminState && (
          <li>
            <Link to="/administracija">Administracija</Link>
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
