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
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:outline-none ">
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
