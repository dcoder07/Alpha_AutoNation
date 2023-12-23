"use client";
import React, { useState } from "react";
import SearchManfacturer from "./SearchManufacturer";

function handleSubmit() {}
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  return (
    <form onSubmit={handleSubmit} className='searchbar'>
      <div className='searchbar__item'>
        <SearchManfacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        
      </div>
    </form>
  );
};

export default SearchBar;
