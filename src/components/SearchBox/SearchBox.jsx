const SearchBox = ({ inputValue, handleChange }) => {
    
  

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;