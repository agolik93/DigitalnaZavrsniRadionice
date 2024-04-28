import { useQuery } from "react-query";
import Filteri from "../components/Filteri";
import { useStore } from "../store";

const Predavaci = () => {
  const { data, isLoading } = useQuery("allData");
  console.log(data);
  const { temeData, predavaciData } = data;
  const admin = useStore((state) => state.adminState);

  return (
    <div className="flex flex-col">
      {admin && (
        <div className="flex justify-end">
          <button>+ Dodaj novog predavaca</button>
        </div>
      )}
      <div className="flex">
        <div className="w-1/5">
          <div className="border-2 m-10">
            <h2>Teme:</h2>
            {/*  {temeData?.map((e) => (
              <Filteri key={e.id} e={e} setFilter="" selectedFilter="" />
            ))} */}
          </div>
        </div>

        <div className="w-4/5 border-2"></div>
      </div>
    </div>
  );
};

export default Predavaci;
