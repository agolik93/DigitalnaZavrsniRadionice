import { useStore } from "../store";

const Radionica = ({ e }) => {
  const admin = useStore((state) => state.adminState);

  const prijavaForm = useStore((state) => state.setPrijavaFormOpen);
  const izabraniForm = useStore((state) => state.setIzabraniForm);

  function handleClick() {
    prijavaForm();
    izabraniForm(e);
  }

  return (
    <div className="border-2">
      <div className="flex ">
        <div className="w-20 h-20 border-2">slika</div>
        <div>
          <h2>Ime radionice:{e.ime}</h2>
          <div>Opis:{e.opis}</div>
          <div>Predavaci:{e.predavac}</div>
          <div>Tezina:{e.tezina}</div>
          <div>Tema:{e.tema}</div>
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Prijavi se</button>
        {admin && <button>Uredi</button>}
      </div>
    </div>
  );
};

export default Radionica;
