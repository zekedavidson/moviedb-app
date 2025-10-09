import React from 'react'
import { getAssetUrl } from '../utils/assetUrl.js'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src={getAssetUrl('/search.svg')} alt='search' />
            <input
            type='text'
            placeholder='Search through thousands of movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    </div>
  )
}

export default Search
