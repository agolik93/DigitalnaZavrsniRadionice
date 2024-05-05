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
    <div className="border-2 p-4 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 border-2 flex items-center justify-center text-gray-600">
          Slika
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-bold mb-1">Ime radionice: {e?.ime}</h2>
          <div className="mb-2">Opis: {e?.opis}</div>
          <div className="mb-2">Predavač: {e?.predavac}</div>
          <div className="mb-2">
            Datum: {new Date(e?.datum).toLocaleDateString("HR-HR")}
          </div>
          <div className="mb-2">Težina: {e?.tezina}</div>
          <div className="mb-2">Tema: {e?.tema}</div>
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
