import axios from "axios";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Modal from "./Modal";
import { useStore } from "../store";

const ModalDodajRadionicu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const izabraniForm = useStore((state) => state.izabraniForm);
  const urediRadionicuForm = useStore((state) => state.urediRadionicuForm);

  const { data, refetch } = useQuery("allData");

  const { radioniceData, temeData, tezineData, predavaciData } = data;

  const izabranaData = radioniceData.find(
    (item) => item.id === izabraniForm.id
  );

  const onSubmit = async (data) => {
    if (urediRadionicuForm) {
      await axios.patch(
        `http://localhost:3000/radionice/${izabraniForm.id}`,
        data
      );
    } else {
      await axios.post("http://localhost:3000/radionice", data);
    }
    refetch("allData");
    reset();
  };

  return (
    <Modal>
      {!isSubmitSuccessful ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 flex flex-col"
        >
          <input
            {...register("ime", { required: true })}
            placeholder="Naziv radionice"
            defaultValue={urediRadionicuForm ? izabranaData.ime : ""}
          />
          {errors.ime && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            {...register("datum", { required: true })}
            type="date"
            defaultValue={urediRadionicuForm ? izabranaData.datum : ""}
          />
          {errors.datum && <span>This field is required</span>}
          <select
            {...register("predavac", { required: true })}
            placeholder="Ime predavaca"
            defaultValue={urediRadionicuForm ? izabranaData.predavac : ""}
          >
            {predavaciData?.map((e) => (
              <option key={e.id} value={e.ime}>
                {e.ime}
              </option>
            ))}
          </select>
          {errors.predavac && <span>This field is required</span>}

          <textarea
            rows="4"
            cols="50"
            {...register("opis", { required: true })}
            placeholder="Opis radionice"
            defaultValue={urediRadionicuForm ? izabranaData.opis : ""}
          />
          {errors.opis && <span>This field is required</span>}

          <select
            {...register("tezina", { required: true })}
            defaultValue={urediRadionicuForm ? izabranaData.tezina : ""}
          >
            {tezineData?.map((e) => (
              <option key={e.id} value={e.ime}>
                {e.ime}
              </option>
            ))}
          </select>
          {errors.tezina && <span>This field is required</span>}
          <select
            {...register("tema", { required: true })}
            defaultValue={urediRadionicuForm ? izabranaData.tema : ""}
          >
            {temeData?.map((e) => (
              <option key={e.id} value={e.ime}>
                {e.ime}
              </option>
            ))}
          </select>
          {errors.tema && <span>This field is required</span>}
          <input
            type="submit"
            value={urediRadionicuForm ? "Izmjeni radionicu" : "Dodaj radionicu"}
          />
        </form>
      ) : (
        <div>Uspjesno {urediRadionicuForm ? "izmjenjeno" : "dodano"}.</div>
      )}
    </Modal>
  );
};

export default ModalDodajRadionicu;
