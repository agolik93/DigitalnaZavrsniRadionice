import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import Modal from "./Modal";

import {
  useLica,
  useOrganizacije,
  usePredavaci,
  useTeme,
} from "../../services/api/data";
import Select from "react-select";

const ModalPredavac = ({ handleOpen, selectedId, setSelectedId }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const { data: temeData } = useTeme();

  const { data: predavaciData, refetch: refetchPredavaci } = usePredavaci();
  const { data: organizacijeData } = useOrganizacije();
  const { refetch: refetchLica } = useLica();

  const izabranaData = predavaciData?.find((e) => e.id === selectedId);
  const edit = handleOpen && selectedId;

  const onSubmit = async (data) => {
    if (edit) {
      await axios.patch(`http://localhost:3000/predavaci/${selectedId}`, data);
    } else {
      await axios.post("http://localhost:3000/predavaci", data);
    }
    refetchPredavaci();
    refetchLica();
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
            placeholder="Ime predavaca"
            defaultValue={edit ? izabranaData?.ime : ""}
          />
          {errors.ime && (
            <span className="text-red-500">This field is required</span>
          )}

          <textarea
            {...register("biografija", { required: true })}
            placeholder="O predavacu"
            defaultValue={edit ? izabranaData?.biografija : ""}
          />
          {errors.biografija && <span>This field is required</span>}

          <select
            {...register("organizacije", { required: true })}
            defaultValue={edit ? izabranaData?.tezina : ""}
          >
            {organizacijeData?.map((e) => (
              <option key={e.id} value={e.ime}>
                {e.ime}
              </option>
            ))}
          </select>
          {errors.organizacije && <span>This field is required</span>}

          <Controller
            name="tema"
            control={control}
            defaultValue={handleOpen ? izabranaData?.tema : []}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={
                  temeData
                    ? temeData?.map((e) => ({ value: e.id, label: e.ime }))
                    : []
                }
                isMulti
                placeholder="Odaberi teme"
              />
            )}
          />

          {errors.tema && <span>This field is required</span>}
          <input
            type="submit"
            value={edit ? "Izmjeni predavaca" : "Dodaj predavaca"}
          />
        </form>
      ) : (
        <div>Uspjesno {edit ? "izmjenjeno" : "dodano"}.</div>
      )}
    </Modal>
  );
};

export default ModalPredavac;
