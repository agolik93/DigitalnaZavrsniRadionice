import { useStore } from "../store";

const Radionica = ({ e, setPrijavaModal, setUrediModal, setId }) => {
  const admin = useStore((state) => state.adminState);

  function handlePrijava() {
    setId(e.id);
    setPrijavaModal(true);
  }

  function handleUredi() {
    setId(e.id);
    setUrediModal(true);
  }

  return (
    <div className="border-4 p-5 grid grid-flow-row gap-4">
      <div className="flex items-center mb-4">
        <img
          src={`https://source.unsplash.com/random/200x200/?workshop=${Math.random()}`}
          alt="Random"
          className="w-20 h-20 border-2 object-cover"
        />
        <div className="ml-4">
          <h2 className=" text-xl font-bold mb-1">Ime radionice: {e?.ime}</h2>
          <div className="mb-2">
            <span className="font-bold">Opis:</span> {e?.opis}
          </div>
          <div className="mb-2">
            <span className="font-bold">Predavač:</span> {e?.predavac}
          </div>
          <div className="mb-2">
            <span className="font-bold">Organizacija:</span> {e?.organizacije}
          </div>
          <div className="mb-2">
            <span className="font-bold">Datum:</span>{" "}
            {new Date(e?.datum).toLocaleDateString("HR-HR")}
          </div>
          <div className="mb-2">
            <span className="font-bold">Težina:</span> {e?.tezina}
          </div>
          <div className="mb-2">
            <span className="font-bold">Tema:</span> {e?.tema}
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handlePrijava}
        >
          Prijavi se
        </button>
        {admin && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleUredi}
          >
            Uredi
          </button>
        )}
      </div>
    </div>
  );
};

export default Radionica;
