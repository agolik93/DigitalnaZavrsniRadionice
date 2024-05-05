import axios from "axios";
import { usePredavaci, useRadionice, useTezine } from "../../services/api/data";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

const ModalRadionica = ({ handleOpen, selectedId, setSelectedId }) => {
  const { data: tezineData } = useTezine();
  const { data: predavaciData } = usePredavaci();
  const { data: radioniceData, refetch: refetchRadionice } = useRadionice();

  const edit = handleOpen && selectedId;

  const izabranaData = selectedId
    ? radioniceData.find((item) => item?.id === selectedId)
    : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      ime: izabranaData?.ime,
      datum: izabranaData?.datum,
      predavac: izabranaData?.predavac,
      opis: izabranaData?.opis,
      tezina: izabranaData?.tezina,
      tema: izabranaData?.tema,
      brojPrijava: 0,
    },
  });

  const onSubmit = async (data) => {
    data.organizacije = selectedOrganizacije;
    if (edit) {
      await axios.patch(`http://localhost:3000/radionice/${selectedId}`, data);
    } else {
      await axios.post("http://localhost:3000/radionice", data);
    }
    refetchRadionice();
    reset();
  };

  const selectedPredavac = watch("predavac");

  const selectedOrganizacije = selectedPredavac
    ? predavaciData?.find((predavac) => predavac.ime === selectedPredavac)
        ?.organizacije
    : "";

  return (
    <Modal handleOpen={handleOpen} setSelectedId={setSelectedId}>
      {!isSubmitSuccessful && predavaciData ? (
        <>
          {edit && <h2>Uredi radionicu {`${izabranaData?.ime}`} </h2>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 flex flex-col gap-3"
          >
            <input
              {...register("ime", { required: true })}
              placeholder="Naziv radionice"
            />
            {errors.ime && <span className="text-red-500">Obavezno polje</span>}

            <input {...register("datum", { required: true })} type="date" />
            {errors.datum && <span>Obavezno polje</span>}

            <select {...register("predavac", { required: true })}>
              <option value="" hidden>
                Odaberi predavaca
              </option>
              {predavaciData?.map((e) => (
                <option key={e.id} value={e.ime}>
                  {e.ime}
                </option>
              ))}
            </select>
            {errors.predavac && <span>Obavezno polje</span>}

            <p>{selectedOrganizacije}</p>

            <textarea
              rows="4"
              cols="50"
              {...register("opis", { required: true })}
              placeholder="Opis radionice"
              defaultValue={edit ? izabranaData?.opis : ""}
            />
            {errors.opis && <span>Obavezno polje</span>}

            <select {...register("tezina", { required: true })}>
              <option value="" hidden>
                Odaberi tezinu
              </option>
              {tezineData?.map((e) => (
                <option key={e.id} value={e.ime}>
                  {e.ime}
                </option>
              ))}
            </select>
            {errors.tezina && <span>Obavezno polje</span>}

            <select
              {...register("tema", { required: true })}
              disabled={watch("predavac") === ""}
            >
              <option value="" hidden>
                Odaberi temu
              </option>
              {predavaciData
                ?.filter((predavac) => predavac.ime === watch("predavac"))
                .map((predavac) =>
                  predavac.tema.map((tema) => (
                    <option key={tema.value} value={tema.label}>
                      {tema.label}
                    </option>
                  ))
                )}
            </select>
            {errors.tema && <span>Obavezno polje</span>}

            <input
              type="submit"
              value={edit ? "Izmjeni radionicu" : "Dodaj radionicu"}
            />
          </form>
        </>
      ) : !isSubmitSuccessful && !predavaciData ? (
        <div>Loading...</div>
      ) : (
        <div>Uspjesno {edit ? "izmjenjeno" : "dodano"}.</div>
      )}
    </Modal>
  );
};

export default ModalRadionica;
