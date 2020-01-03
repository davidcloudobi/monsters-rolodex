import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const Cardlist = ({monster}) => {
    return (
 
        
        <div className='cardlist'>
            {monster.map((val, index) =>
             
                <Card key={index} value = {val}></Card>
            )}
        </div>
    )
}
