const Filteri = ({ e, setFilter, selectedFilter }) => {
  function handleChange() {
    selectedFilter === e.ime ? setFilter(null) : setFilter(e.ime);
  }

  return (
    <div>
      <input
        type="checkbox"
        id={e.ime}
        checked={selectedFilter === e.ime}
        onChange={handleChange}
      />
      <label htmlFor={e.ime}>{e.ime}</label>
    </div>
  );
};

export default Filteri;
