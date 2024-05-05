const TablePrijave = ({ data, setId, setDeleteM }) => {
  console.log(data.filter((e) => e.id === "cc95")[0].polaznici);

  return (
    <div>
      {data?.map((e) => {
        return (
          <div className="border-2 " key={e.id}>
            <h2 className=" text-xl font-bold"> {e.ime}</h2>
            <div>
              {e.polaznici.map((e) => (
                <div key={e.razlog}>
                  <div>{e.ime_prezime}</div>
                  <div>{e.email}</div>
                  <div>{e.razlog}</div>
                  <button>Izbrisi</button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TablePrijave;
