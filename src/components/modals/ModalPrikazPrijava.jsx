import TablePrijave from "../table/TablePrijave";
import Modal from "./Modal";

const ModalPrikazPrijava = ({ handleOpen, data }) => {
  return (
    <Modal handleOpen={handleOpen}>
      <TablePrijave data={data} />
    </Modal>
  );
};

export default ModalPrikazPrijava;
