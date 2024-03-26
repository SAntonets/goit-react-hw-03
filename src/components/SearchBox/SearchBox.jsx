import clsx from "clsx";
import css from "./SearchBox.module.css"
import { useId } from "react";


const SearchBox = ({ inputValue, handleChange }) => {
    
  const searchID = useId();  

  return (
    <div>
      <label className={css.searchLabel} htmlFor={searchID}>Find contacts by name</label>
      <input className={css.searchInput} id={searchID} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;