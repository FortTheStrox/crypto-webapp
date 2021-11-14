import './../style/App.css';

export function SearchBar({toggleTable} : any) {
    return (
      <div className="searchBar">
        <form>
          <input type="text" placeholder="Search for token..." />
        </form>
        {/* <button onClick={toggleTable}>
            Table 2 Toggle
        </button> */}
      </div>
      
    )
}