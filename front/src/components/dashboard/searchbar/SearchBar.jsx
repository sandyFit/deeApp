import React from 'react'
import './searchBar.css'

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <div className= 'search-wrapper'>
        <div className="search">
          <input className="mr-sm-2"
            type="text" placeholder="Search by title" />          
        </div>
        <button className="btn btn-outline-success " type="submit">Search</button>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
            />
          </div>
        </div>
      </div>
    </div>
    
  )
}

