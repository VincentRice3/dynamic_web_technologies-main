import React from 'react'

const SearchMeals = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input id="search"
        type="text"
        role="searchbox"
        placeholder='Search Meals'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
    </form>
  )
}

export default SearchMeals