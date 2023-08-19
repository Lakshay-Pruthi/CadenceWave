function SearchBar() {
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder='Search...' />
                <img src={searchIcon} alt="" />
            </div>
        </>
    )
}

export default SearchBar;