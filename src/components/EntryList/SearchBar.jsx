import React, {useState} from "react";

import { TextField } from "@mui/material";

export default function SearchBar({handleSearch}) {
  const [keyword, setKeyword] = useState('');
  const onSearch = (e) => {
    setKeyword(e.target.value)
    handleSearch(e.target.value);
  }
  return (
    <>
      <TextField type="text" 
        value={keyword} 
        onChange={onSearch} 
        label="Search"
        size="small"
      />
    </>
  )
}