import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useStore } from "../store";

async function fetchData() {
  const res = await axios.get("https://randomuser.me/api/?results=3");
  return res.data.results;
}

const Predavac = ({ predavac, i }) => {
  const { data } = useQuery("lica", fetchData, { staleTime: Infinity });

  const odabraniPredavac = useStore((state) => state.odabraniPredavac);
  const setOdabraniPredavac = useStore((state) => state.setOdabraniPredavac);
  const admin = useStore((state) => state.adminState);

  function handleClick() {
    setOdabraniPredavac(predavac.ime);
  }

  return (
    <>
      <div className="border-2">
        <img src={data && data[i]?.picture.large} alt="" />
        <h2>{predavac?.ime}</h2>
        <div>{predavac?.biografija}</div>
        <div>Organizacija</div>
        <div>Teme:</div>
      </div>
      <button onClick={handleClick}>Pregledaj radionice</button>
      {odabraniPredavac === predavac.ime && (
        <>
          <div>Da li ste sigurni:</div>
          <Link to={odabraniPredavac}>Da</Link>
          <button onClick={() => setOdabraniPredavac("")}>Ne</button>
        </>
      )}

      {admin && <button>Uredi</button>}
    </>
  );
};

export default Predavac;
