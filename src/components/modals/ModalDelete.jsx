import axios from "axios";
import Modal from "./Modal";

const ModalDelete = ({ handleOpen, location, refetch, setSelectedId }) => {
  function handleDelete() {
    axios
      .delete(`http://localhost:3000/${location}`)
      .then(() => {
        refetch();
      })
      .finally(() => {
        handleOpen(false);
        setSelectedId("");
      });
  }

  return (
    <Modal handleOpen={handleOpen} setSelectedId={setSelectedId}>
      <p>Da li ste sigurni da zelite izbrisati? </p>
      <button onClick={handleDelete}>Da</button>
      <button onClick={() => handleOpen(false)}>Ne</button>
    </Modal>
  );
};

export default ModalDelete;
