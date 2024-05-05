import { useState } from "react";
import { useStore } from "../../store";
import { useOrganizacije } from "../../services/api/data";
import TableOrganizacija from "../../components/table/TableOrganizacija";
import ModalOrganizacije from "../../components/modals/ModalOrganizacije";
import ModalDelete from "../../components/modals/ModalDelete";

const OrganizacijeSubPage = () => {
  const handleOpen = useStore((state) => state.handleOpen);
  const setHandleOpen = useStore((state) => state.setHandleOpen);

  const [id, setId] = useState("");

  const { data: organizacijeData, refetch: refetchOrganizacije } =
    useOrganizacije();

  const [deleteM, setDeleteM] = useState(false);

  const location = `organizacije/${id}`;

  return (
    <>
      <TableOrganizacija
        data={organizacijeData}
        setId={setId}
        setHandleOpen={setHandleOpen}
        setDeleteM={setDeleteM}
      />
      {handleOpen && (
        <ModalOrganizacije
          handleOpen={setHandleOpen}
          selectedId={id}
          setSelectedId={setId}
        />
      )}
      {deleteM && (
        <ModalDelete
          handleOpen={setDeleteM}
          location={location}
          refetch={refetchOrganizacije}
          setSelectedId={setId}
        />
      )}
    </>
  );
};

export default OrganizacijeSubPage;
