import "./SearchAndSort.css";

export const SearchAndSort = ({ sortAndSearchState }) => {
  const [state, setState] = sortAndSearchState;

  const handleClick = (e) => {
    e.preventDefault();
    setState({ ...state, isSorted: !state.isSorted });
  };

  const handleChange = (e) => {
    setState({ ...state, search: e.target.value });
  };

  const icon = state.isSorted ? "sortBtnAsc" : "sortBtnDesc";

  return (
    <div className="searchAndSortBlock">
      <div>
        <input
          type="text"
          className="searching"
          placeholder=" Search a user"
          value={state.search}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <button className={icon} onClick={(e) => handleClick(e)} />
      </div>
    </div>
  );
};
