import { useState } from "react";
import { useStore } from "../../store";
import { useTeme } from "../../services/api/data";

import ModalTeme from "../../components/modals/ModalTeme";
import ModalDelete from "../../components/modals/ModalDelete";
import TableTema from "../../components/table/TableTema";

const TemaSubPage = () => {
  const handleOpen = useStore((state) => state.handleOpen);
  const setHandleOpen = useStore((state) => state.setHandleOpen);

  const [id, setId] = useState("");

  const { data: temeData, refetch: refetchTeme } = useTeme();

  const [deleteM, setDeleteM] = useState(false);

  const location = `teme/${id}`;

  return (
    <>
      <TableTema
        data={temeData}
        setId={setId}
        setHandleOpen={setHandleOpen}
        setDeleteM={setDeleteM}
      />
      {handleOpen && (
        <ModalTeme
          handleOpen={setHandleOpen}
          selectedId={id}
          setSelectedId={setId}
        />
      )}
      {deleteM && (
        <ModalDelete
          handleOpen={setDeleteM}
          location={location}
          refetch={refetchTeme}
          setSelectedId={setId}
        />
      )}
    </>
  );
};

export default TemaSubPage;
