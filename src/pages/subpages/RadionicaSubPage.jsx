import { useState } from "react";
import ModalDelete from "../../components/modals/ModalDelete";
import ModalRadionica from "../../components/modals/ModalRadionica";
import TableRadionica from "../../components/table/TableRadionica";
import { useRadionice } from "../../services/api/data";
import { useStore } from "../../store";

const RadionicaSubPage = () => {
  const handleOpen = useStore((state) => state.handleOpen);
  const setHandleOpen = useStore((state) => state.setHandleOpen);

  const [id, setId] = useState("");

  const { data: radioniceData, refetch: refetchRadionica } = useRadionice();

  const [deleteM, setDeleteM] = useState(false);

  const location = `radionice/${id}`;

  return (
    <>
      <TableRadionica
        data={radioniceData}
        setId={setId}
        setHandleOpen={setHandleOpen}
        setDeleteM={setDeleteM}
      />
      {handleOpen && (
        <ModalRadionica
          handleOpen={setHandleOpen}
          selectedId={id}
          setSelectedId={setId}
        />
      )}
      {deleteM && (
        <ModalDelete
          handleOpen={setDeleteM}
          location={location}
          refetch={refetchRadionica}
          setSelectedId={setId}
        />
      )}
    </>
  );
};

export default RadionicaSubPage;
