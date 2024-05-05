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
    <div className="border-2">
      <div className="flex ">
        <div className="w-20 h-20 border-2">slika</div>
        <div>
          <h2>Ime radionice:{e?.ime}</h2>
          <div>Opis:{e?.opis}</div>
          <div>Predavaci:{e?.predavac}</div>
          <div>Tezina:{e?.tezina}</div>
          <div>Tema:{e?.tema}</div>
        </div>
      </div>
      <div>
        <button onClick={handlePrijava}>Prijavi se</button>
        {admin && <button onClick={handleUredi}>Uredi</button>}
      </div>
    </div>
  );
};

export default Radionica;
