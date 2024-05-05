import { Link } from "react-router-dom";
import { useStore } from "../store";
import { useLica } from "../services/api/data";

const Predavac = ({ e, i, setUrediModal, setId }) => {
  const admin = useStore((state) => state.adminState);

  const { data, isLoading } = useLica();

  if (isLoading) return <div>Loading...</div>;

  function handleClick() {
    setUrediModal(true);
    setId(e.id);
  }

  return (
    <>
      <div className="border-4 p-10 mx-5 flex  flex-col p-5">
        <div className="flex-grow">
          <img
            className="w-32 h-32 object-cover rounded-full mb-2"
            src={data && data[i]?.picture.large}
            alt=""
          />
          <h2 className="text-xl font-bold mb-1">Ime: {e?.ime}</h2>
          <div className="mb-2">
            <span className="font-bold">O predavacu:</span>
            {e?.biografija}
          </div>
          <div className="mb-2">
            <span className="font-bold">Organizacija:</span>
            {e?.organizacije}
          </div>
          <ul className="mb-2">
            <span className="font-bold">Teme:</span>
            {e?.tema?.map((e) => (
              <li key={e.value}>{e.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            to={`/predavaci/${e?.ime}`}
            className="text-blue-500 hover:underline"
          >
            Pregledaj radionice
          </Link>
          {admin && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={handleClick}
            >
              Uredi
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Predavac;
