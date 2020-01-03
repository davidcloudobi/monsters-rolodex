import React from 'react'
import './card.component.css'

export  const Card = ({value}) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${value.id}?set=set2&size=180x180`} alt=""/>
        <h1>{value.name}</h1>
        <h2>{value.email}</h2>
        </div>
    )
}
