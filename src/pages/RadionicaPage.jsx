import Radionica from "../components/Radionica";
import ModalPrijava from "../components/modals/ModalPrijava";
import ModalRadionica from "../components/modals/ModalRadionica";
import { useStore } from "../store";
import { useState } from "react";
import { useRadionice, useTeme, useTezine } from "../services/api/data";
import { useParams } from "react-router-dom";
import Filtering from "../components/Filtering";

const RadionicaPage = () => {
  const admin = useStore((state) => state.adminState);

  const { data: radioniceData } = useRadionice();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");

  const [prijavaOpen, setPrijavaOpen] = useState(false);
  const { id: izabraniId } = useParams();

  const { data: tezineData } = useTezine();
  const { data: temeData } = useTeme();

  return (
    <div className="flex flex-col">
      {admin && (
        <div className="flex justify-end">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            + Dodaj novu radionicu
          </button>
        </div>
      )}
      <div className="flex">
        <Filtering
          izabraniId={izabraniId}
          data={radioniceData}
          setId={setId}
          setPrijavaOpen={setPrijavaOpen}
          setOpenModal={setOpenModal}
          MapComponent={Radionica}
          data1={temeData}
          data1Naziv="Tema"
          data2={tezineData}
          data2Naziv="Tezina"
        />
      </div>
      {openModal && (
        <ModalRadionica
          handleOpen={setOpenModal}
          selectedId={id}
          setSelectedId={setId}
        />
      )}
      {prijavaOpen && (
        <ModalPrijava
          selectedId={id}
          handleOpen={setPrijavaOpen}
          setSelectedId={setId}
        />
      )}
    </div>
  );
};

export default RadionicaPage;
