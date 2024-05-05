import { useEffect, useState } from "react";
import Filteri from "./Filteri";

const Filtering = ({
  izabraniId,
  data,
  setId,
  MapComponent,
  setPrijavaOpen,
  setOpenModal,
  data1,
  data2,
  data1Naziv,
  data2Naziv,
}) => {
  const [data1Filter, setData1Filter] = useState(null);
  const [data2Filter, setData2Filter] = useState(null);

  const [loadingFilter, setLoadingFilter] = useState(false);

  const handleFilterChange = () => {
    if (data1Filter === null && data2Filter === null) {
      return;
    }
    setLoadingFilter(true);
    setTimeout(() => {
      setLoadingFilter(false);
    }, 1000);
  };

  useEffect(() => {
    handleFilterChange();
  }, [data1Filter, data2Filter]);

  return (
    <>
      <div className="w-1/5">
        {izabraniId !== undefined && (
          <h2>Radionice predavaca {`${izabraniId}`}</h2>
        )}
        {data1 && (
          <div className="m-10 border-4  rounded-xl text-center bg-blue-300">
            <h2>{data1Naziv}</h2>
            {data1?.map((e) => (
              <Filteri
                key={e.id}
                e={e}
                setFilter={setData1Filter}
                selectedFilter={data1Filter}
              />
            ))}
          </div>
        )}

        {data2?.length > 0 && (
          <div className="m-10 border-4  rounded-xl text-center bg-blue-300">
            <h2>{data2Naziv}</h2>
            {data2.map((e) => (
              <Filteri
                key={e.id}
                e={e}
                setFilter={setData2Filter}
                selectedFilter={data2Filter}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-4/5 border-4 bg-blue-300">
        {loadingFilter ? (
          <div>Loading...</div>
        ) : (
          <>
            {data
              ?.filter((e) =>
                data1Filter !== null
                  ? e.tema === data1Filter ||
                    (Array.isArray(e.tema) &&
                      e.tema.some((f) => f.label === data1Filter))
                  : true
              )
              .filter((e) =>
                data2Filter !== null
                  ? e.tezina === data2Filter || e.organizacije === data2Filter
                  : true
              )
              .filter((e) =>
                izabraniId !== undefined ? e.predavac == izabraniId : true
              )
              .map((e, i) => (
                <MapComponent
                  key={e.id}
                  e={e}
                  setId={setId}
                  setPrijavaModal={setPrijavaOpen}
                  setUrediModal={setOpenModal}
                  i={i}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Filtering;
