import { useForm } from "react-hook-form";
import axios from "axios";
import { useStore } from "../store";
import Modal from "./Modal";

const ModalPrijava = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const izabraniForm = useStore((state) => state.izabraniForm);

  const onSubmit = async (data) => {
    const formData = {
      ime_prezime: data.ime_prezime,
      email: data.email,
      razlog: data.razlog,
    };

    const response = await axios.get(
      `http://localhost:3000/radionice/${izabraniForm.id}`
    );

    const radioniceData = response.data;

    radioniceData.polaznici = [...(radioniceData.polaznici || []), formData];

    await axios.put(
      `http://localhost:3000/radionice/${izabraniForm.id}`,
      radioniceData
    );

    reset();
  };

  return (
    <Modal>
      {!isSubmitSuccessful ? (
        <>
          <div>Prijavi se na {izabraniForm.ime}</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 flex flex-col "
          >
            <input
              {...register("ime_prezime", { required: true })}
              className="border-2"
              id="ime_prezime"
              placeholder="Unesite ime i prezime"
            />
            {errors.ime_prezime && (
              <span className="bg-red-700">Obavezno polje</span>
            )}

            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Neispravan format e-mail adrese",
                },
              })}
              id="email"
              placeholder="Unesite email adresu"
            />
            {errors.email?.type === "required" && (
              <span className="bg-red-700">Email je obavezan</span>
            )}
            {errors.email && (
              <span className="bg-red-700">{errors.email.message}</span>
            )}

            <textarea
              rows="4"
              cols="50"
              {...register("razlog", { required: true })}
              id="razlog"
              placeholder="Unesite razlog prijave..."
            />
            {errors.razlog && (
              <span className="bg-red-700">Obavezno polje</span>
            )}

            <input type="submit" value="Prijavi se" />
          </form>
        </>
      ) : (
        <h1>Hvala na prijavi!</h1>
      )}
    </Modal>
  );
};

export default ModalPrijava;
