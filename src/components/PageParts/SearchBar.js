const SearchBar = () => {
  return (
    <>
      <div className="page__content__search animation">
        <input
          className="page__content__search__searchInput"
          type="text"
          name=""
        />

        <button className="page__content__search__searchButton" href="#">
          <i className="material-icons">search</i>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
