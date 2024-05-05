import Modal from "./Modal";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useTeme } from "../../services/api/data";

const ModalTeme = ({ handleOpen, setSelectedId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const { refetch: refetchTeme } = useTeme();

  const onSubmit = async (data) => {
    await axios.post("http://localhost:3000/teme", data);
    refetchTeme();
    reset();
  };

  return (
    <Modal handleOpen={handleOpen} setSelectedId={setSelectedId}>
      {!isSubmitSuccessful ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 flex flex-col"
        >
          <input {...register("ime", { required: true })} placeholder="Tema" />
          {errors.ime && (
            <span className="text-red-500">This field is required</span>
          )}
          <input type="submit" value={"Dodaj temu"} />
        </form>
      ) : (
        <div>Uspjesno dodano.</div>
      )}
    </Modal>
  );
};

export default ModalTeme;
