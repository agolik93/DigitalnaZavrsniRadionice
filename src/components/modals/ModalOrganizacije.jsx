import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useOrganizacije } from "../../services/api/data";
import axios from "axios";

const ModalOrganizacije = ({ handleOpen, selectedId, setSelectedId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const { data: organizacijeData, refetch: refetchOrganizacije } =
    useOrganizacije();

  const izabranaData = organizacijeData?.find((e) => e.id === selectedId);

  const edit = handleOpen && selectedId;

  const onSubmit = async (data) => {
    if (edit) {
      await axios.patch(
        `http://localhost:3000/organizacije/${selectedId}`,
        data
      );
    } else {
      await axios.post("http://localhost:3000/organizacije", data);
    }
    refetchOrganizacije();

    reset();
  };

  return (
    <Modal handleOpen={handleOpen} setSelectedId={setSelectedId}>
      {!isSubmitSuccessful ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 flex flex-col"
        >
          <input
            {...register("ime", { required: true })}
            placeholder="Ime organizacije"
            defaultValue={edit ? izabranaData?.ime : ""}
          />
          {errors.ime && <span className="text-red-500">Obavezno polje</span>}

          <textarea
            {...register("opis", { required: true })}
            placeholder="O organizaciji"
            defaultValue={edit ? izabranaData?.opis : ""}
          />
          {errors.opis && <span>Obavezno polje</span>}

          <input
            type="submit"
            value={edit ? "Izmjeni organizaciju" : "Dodaj organizaciju"}
          />
        </form>
      ) : (
        <div>Uspjesno {edit ? "izmjenjeno" : "dodano"}.</div>
      )}
    </Modal>
  );
};

export default ModalOrganizacije;
