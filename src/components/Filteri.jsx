const Filteri = ({ e, setFilter, selectedFilter }) => {
  function handleChange() {
    selectedFilter === e.ime ? setFilter(null) : setFilter(e.ime);
  }

  return (
    <div className="flex items-center mb-2 ">
      <input
        type="checkbox"
        id={e.ime}
        checked={selectedFilter === e.ime}
        onChange={handleChange}
        className="mr-2 form-checkbox text-indigo-600 border-indigo-600 "
      />
      <label htmlFor={e.ime} className="text-sm text-gray-800">
        {e.ime}
      </label>
    </div>
  );
};

export default Filteri;
