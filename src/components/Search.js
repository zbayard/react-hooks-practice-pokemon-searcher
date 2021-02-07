import React from "react";

function Search({search, setSearch}) {
  

  function passSearch(e){
    setSearch(e.target.value)
    
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={passSearch}className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
