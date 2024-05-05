import { useState } from "react";
import ModalDelete from "../../components/modals/ModalDelete";

import { usePredavaci } from "../../services/api/data";
import { useStore } from "../../store";
import TablePredavac from "../../components/table/TablePredavac";
import ModalPredavac from "../../components/modals/ModalPredavac";

const PredavaciSubPage = () => {
  const handleOpen = useStore((state) => state.handleOpen);
  const setHandleOpen = useStore((state) => state.setHandleOpen);

  const [id, setId] = useState("");

  const { data: predavaciData, refetch: refetchPredavaci } = usePredavaci();

  const [deleteM, setDeleteM] = useState(false);

  const location = `predavaci/${id}`;

  return (
    <>
      <TablePredavac
        data={predavaciData}
        setId={setId}
        setHandleOpen={setHandleOpen}
        setDeleteM={setDeleteM}
      />
      {handleOpen && (
        <ModalPredavac
          handleOpen={setHandleOpen}
          selectedId={id}
          setSelectedId={setId}
        />
      )}
      {deleteM && (
        <ModalDelete
          handleOpen={setDeleteM}
          location={location}
          refetch={refetchPredavaci}
          setSelectedId={setId}
        />
      )}
    </>
  );
};

export default PredavaciSubPage;
