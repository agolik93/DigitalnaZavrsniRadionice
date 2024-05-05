import { Link } from "react-router-dom";
import { useStore } from "../store";
import { useLica } from "../services/api/data";

const Predavac = ({ e, i, setUrediModal, setId }) => {
  const admin = useStore((state) => state.adminState);

  const { data, isLoading } = useLica();

  if (isLoading) return <div>Loading...</div>;

  function handleClick() {
    setUrediModal(true);
    setId(e.id);
  }

  return (
    <>
      <div className="border-2">
        <img src={data && data[i]?.picture.large} alt="" />
        <h2>{e?.ime}</h2>
        <div>{e?.biografija}</div>
        <div>{e?.organizacije}</div>
        <ul>
          {e?.tema?.map((e) => (
            <li key={e.value}> {e.label}</li>
          ))}
        </ul>
      </div>
      <Link to={`/predavaci/${e?.ime}`}>Pregledaj radionice</Link>

      {admin && <button onClick={handleClick}>Uredi</button>}
    </>
  );
};

export default Predavac;
