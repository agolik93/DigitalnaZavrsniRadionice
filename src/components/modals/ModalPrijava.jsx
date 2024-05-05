import { useForm } from "react-hook-form";
import axios from "axios";

import Modal from "./Modal";
import { useRadionice } from "../../services/api/data";
import { useState } from "react";

const ModalPrijava = ({ handleOpen, selectedId, setSelectedId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const { data: radioniceData } = useRadionice();

  const izabranaRadionica = radioniceData.find((e) => e.id === selectedId);
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = async (data) => {
    const updatedBrojPrijava = parseInt(izabranaRadionica.brojPrijava) + 1;

    const updatedData = {
      ...izabranaRadionica,
      brojPrijava: updatedBrojPrijava,
    };

    await axios.patch(
      `http://localhost:3000/radionice/${selectedId}`,
      updatedData
    );
    setSubmittedData(data);
    reset();
  };

  return (
    <Modal handleOpen={handleOpen} setSelectedId={setSelectedId}>
      {!isSubmitSuccessful ? (
        <>
          <div>Prijavi se na {izabranaRadionica?.ime}</div>
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
        <>
          <h1>Hvala na prijavi!</h1>
          <div>
            <p>Ime i prezime: {submittedData.ime_prezime}</p>
            <p>Email adresa: {submittedData.email}</p>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ModalPrijava;
