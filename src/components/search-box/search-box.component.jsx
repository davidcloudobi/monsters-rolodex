import React from 'react'
import './search-box.styles.css'

export const Searchbox = ({search}) => {
    return (
       
        <input className='search' type="search" placeholder="search monster" onChange={search} />
      
    )
}
