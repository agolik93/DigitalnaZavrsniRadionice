import { useRadionice } from "../../services/api/data";

const TableRadionica = ({ setId, setHandleOpen, setDeleteM }) => {
  const { data: radioniceData } = useRadionice();

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Radionica</th>
          <th className="px-4 py-2">Predavac</th>
          <th className="px-4 py-2">Organizacija</th>
          <th className="px-4 py-2">Tema</th>
          <th className="px-4 py-2">Broj Prijava</th>
          <th className="px-4 py-2">Datum</th>
          <th className="px-4 py-2">Akcije</th>
        </tr>
      </thead>
      <tbody>
        {radioniceData?.map((e, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
            <td className="border px-4 py-2">{e.ime}</td>
            <td className="border px-4 py-2">{e.predavac}</td>
            <td className="border px-4 py-2">{e.organizacije}</td>
            <td className="border px-4 py-2">{e.tema}</td>
            <td className="border px-4 py-2">
              <p>{e.brojPrijava}</p>
            </td>
            <td className="border px-4 py-2">{e.datum}</td>
            <td className="border px-4 py-2">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => {
                  setId(e.id);
                  setHandleOpen(true);
                }}
              >
                Uredi
              </button>
              <button
                className="text-red-500 hover:text-red-700 ml-2"
                onClick={() => {
                  setId(e.id);
                  setDeleteM(true);
                }}
              >
                Izbrisi
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableRadionica;
