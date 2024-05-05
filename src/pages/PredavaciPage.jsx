import { useStore } from "../store";
import Predavac from "../components/Predavac";
import { useOrganizacije, usePredavaci, useTeme } from "../services/api/data";
import { useState } from "react";
import ModalPredavac from "../components/modals/ModalPredavac";
import Filtering from "../components/Filtering";

const PredavaciPage = () => {
  const admin = useStore((state) => state.adminState);

  const { data: predavaciData } = usePredavaci();
  const { data: temeData } = useTeme();
  const { data: organizacijeData } = useOrganizacije();

  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");

  return (
    <div className="flex flex-col">
      {admin && (
        <div className="flex justify-end">
          <button onClick={() => setOpenModal(true)}>
            + Dodaj novog predavaca
          </button>
        </div>
      )}
      <div className="flex">
        <Filtering
          data={predavaciData}
          setId={setId}
          setOpenModal={setOpenModal}
          MapComponent={Predavac}
          data1={temeData}
          data1Naziv="Tema"
          data2={organizacijeData}
          data2Naziv="Organizacije"
        />
      </div>
      {openModal && (
        <ModalPredavac
          handleOpen={setOpenModal}
          selectedId={id}
          setSelectedId={setId}
        />
      )}
    </div>
  );
};

export default PredavaciPage;
