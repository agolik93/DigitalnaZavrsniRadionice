import { useRadionice } from "../../services/api/data";

const TablePredavac = ({ data, setId, setHandleOpen, setDeleteM }) => {
  const { data: radioniceData } = useRadionice();

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-blue-200">
          <th className="px-4 py-2">Ime</th>
          <th className="px-4 py-2">Organizacija</th>
          <th className="px-4 py-2">O predavaču</th>
          <th className="px-4 py-2">Teme</th>
          <th className="px-4 py-2">Ukupan broj prijava</th>
          <th className="px-4 py-2">Akcije</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((e, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-blue-100" : "bg-white"}>
            <td className="border px-4 py-2">{e.ime}</td>
            <td className="border px-4 py-2">{e.organizacije}</td>
            <td className="border px-4 py-2">{e.biografija}</td>
            <td className="border px-4 py-2 flex">
              {e.tema.map((e) => (
                <p
                  className="mx-2 bg-blue-300 rounded-full px-2 py-1 text-sm text-white"
                  key={e.value}
                >
                  {e.label}
                </p>
              ))}
            </td>
            <td className="border px-4 py-2">
              {radioniceData
                .filter((radionica) => radionica.predavac === e.ime)
                .map((e) => +e.brojPrijava)
                .reduce((pv, cv) => pv + cv, 0)}
            </td>
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

export default TablePredavac;
