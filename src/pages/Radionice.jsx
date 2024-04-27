import axios from "axios";
import { useQuery } from "react-query";
import Filteri from "../components/Filteri";
import Radionica from "../components/Radionica";
import { useStore } from "../store";
import { useEffect, useState } from "react";

import ModalDodajRadionicu from "../components/ModalDodajRadionicu";
import ModalPrijava from "../components/ModalPrijava";

async function fetchData() {
  try {
    const [radioniceResponse, temeResponse, tezineResponse] = await Promise.all(
      [
        axios.get("http://localhost:3000/radionice"),
        axios.get("http://localhost:3000/teme"),
        axios.get("http://localhost:3000/tezine"),
      ]
    );

    const radioniceData = radioniceResponse.data;
    const temeData = temeResponse.data;
    const tezineData = tezineResponse.data;

    return { radioniceData, temeData, tezineData };
  } catch (error) {
    throw new Error(error.message);
  }
}

const Radionice = () => {
  const admin = useStore((state) => state.adminState);
  const setTezinaFilter = useStore((state) => state.setTezinaFilter);
  const tezinaFilter = useStore((state) => state.tezinaFilter);
  const temaFilter = useStore((state) => state.temaFilter);
  const setTemaFilter = useStore((state) => state.setTemaFilter);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const isFormOpen = useStore((state) => state.prijavaForm);

  const handleFilterChange = () => {
    if (tezinaFilter === null && temaFilter === null) {
      return;
    }
    setLoadingFilter(true);
    setTimeout(() => {
      setLoadingFilter(false);
    }, 1000);
  };

  useEffect(() => {
    handleFilterChange();
  }, [tezinaFilter, temaFilter]);

  const { data, isLoading, error } = useQuery("allData", fetchData);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const { radioniceData, temeData, tezineData } = data;

  function handleReset() {
    setTemaFilter(null);
    setTezinaFilter(null);
  }

  function handleDodajRadionicu() {}

  return (
    <div className="flex flex-col">
      {admin && (
        <div className="flex justify-end">
          <button onClick={handleDodajRadionicu}>+ Dodaj novu radionicu</button>
        </div>
      )}
      <div className="flex">
        <div className="w-1/5">
          <div className="border-2 m-10">
            <h2>Teme:</h2>
            {temeData?.map((e) => (
              <Filteri
                key={e.id}
                e={e}
                setFilter={setTemaFilter}
                selectedFilter={temaFilter}
              />
            ))}
          </div>

          <div className="border-2 m-10">
            <h2>Tezine:</h2>
            {tezineData?.map((e) => (
              <Filteri
                key={e.id}
                e={e}
                setFilter={setTezinaFilter}
                selectedFilter={tezinaFilter}
              />
            ))}
          </div>
          <button onClick={handleReset}>Ponisti filtere</button>
        </div>

        <div className="w-4/5 border-2">
          {loadingFilter ? (
            <div>Loading...</div>
          ) : (
            <>
              {radioniceData
                ?.filter((e) =>
                  tezinaFilter !== null ? e.tezina === tezinaFilter : true
                )
                .filter((e) =>
                  temaFilter !== null ? e.tema === temaFilter : true
                )
                .map((e) => (
                  <Radionica key={e.id} e={e} />
                ))}
            </>
          )}
        </div>
      </div>
      {isFormOpen && <ModalPrijava />}
      <ModalDodajRadionicu />
    </div>
  );
};

export default Radionice;
