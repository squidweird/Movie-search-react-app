import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {search, setSearch, error} = useGlobalContext();

  function handleChange(e){
    setSearch(e.target.value);
  }
  function handleSubmit(e){
     e.preventDefault();
  }
  return<form className="search-form" onSumit={handleSubmit}>
  <h2>Movie search karlo yaar</h2>
      <input value={search} className="form-input" type="text" onChange={handleChange} />
      {error.show && <div className="error">{error.message}</div>}
    </form>
    

}

export default SearchForm
