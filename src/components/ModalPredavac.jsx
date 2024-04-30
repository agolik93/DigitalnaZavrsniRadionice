import axios from "axios";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Modal from "./Modal";
import { useStore } from "../store";

const ModalPredavac = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const { data, refetch } = useQuery("allData");

  const { predavaciData } = data;

  const onSubmit = async (data) => {};

  return (
    <Modal>
      {!isSubmitSuccessful ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 flex flex-col"
        >
          <input
            {...register("ime", { required: true })}
            placeholder="Ime predavaca"
          />
          {errors.ime && (
            <span className="text-red-500">This field is required</span>
          )}

          <input {...register("biografija", { required: true })} />
          {errors.biografija && <span>This field is required</span>}

          <input {...register("biografija", { required: true })} />
          {errors.biografija && <span>This field is required</span>}
        </form>
      ) : (
        <div>Uspjesno dodan predavac</div>
      )}
    </Modal>
  );
};

export default ModalPredavac;
