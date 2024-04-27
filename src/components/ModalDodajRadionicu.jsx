import axios from "axios";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const ModalDodajRadionicu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post("http://localhost:3000/radionice", data);
    reset();
  };
  const allData = useQuery("allData");

  const { temeData, tezineData } = allData.data;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border-2">
      <input
        {...register("ime", { required: true })}
        placeholder="Naziv radionice"
      />
      {errors.ime && (
        <span className="text-red-500">This field is required</span>
      )}
      <input {...register("datum", { required: true })} type="date" />
      {errors.datum && <span>This field is required</span>}
      <input
        {...register("predavac", { required: true })}
        placeholder="Ime predavaca"
      />
      {errors.predavac && <span>This field is required</span>}
      <textarea
        rows="4"
        cols="50"
        {...register("opis", { required: true })}
        placeholder="Opis radionice"
      />
      {errors.opis && <span>This field is required</span>}

      <select {...register("tezina", { required: true })}>
        {tezineData?.map((e) => (
          <option key={e.id} value={e.ime}>
            {e.ime}
          </option>
        ))}
      </select>
      {errors.tezina && <span>This field is required</span>}

      <select {...register("tema", { required: true })}>
        {temeData?.map((e) => (
          <option key={e.id} value={e.ime}>
            {e.ime}
          </option>
        ))}
      </select>
      {errors.tema && <span>This field is required</span>}

      <input type="submit" value="Dodaj radionicu" />
    </form>
  );
};

export default ModalDodajRadionicu;
