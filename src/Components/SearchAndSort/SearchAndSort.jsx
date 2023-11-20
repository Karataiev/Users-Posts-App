import "./SearchAndSort.css";

export const SearchAndSort = ({ sorting }) => {
  const [sort, setSort] = sorting;
  const handleClick = (e) => {
    e.preventDefault();
    setSort(!sort);
  };

  const icon = sort ? "sortBtnAsc" : "sortBtnDesc";

  return (
    <div className="searchAndSortBlock">
      <div>
      <input type="text"/>
      </div>
      <div>
        <button className={icon} onClick={(e) => handleClick(e)}/>
      </div>
    </div>
  );
};
