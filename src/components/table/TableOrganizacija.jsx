import { useRadionice } from "../../services/api/data";

const TableOrganizacija = ({ setId, setHandleOpen, setDeleteM, data }) => {
  const { data: radioniceData } = useRadionice();

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Organizacija</th>
          <th className="px-4 py-2">Opis</th>
          <th className="px-4 py-2">Broj Radionica</th>
          <th className="px-4 py-2">Akcije</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((e, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
            <td className="border px-4 py-2">{e.ime}</td>
            <td className="border px-4 py-2">{e.opis}</td>

            <td className="border px-4 py-2 flex">
              {radioniceData
                .filter((radionica) => radionica.organizacije === e.ime)
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

export default TableOrganizacija;
