import React from 'react'
import Card from "./Card"

const CardList = (props) => {
    
    return (props.monsters.map(monster=>{
        return (
        
        <div key={monster.id} className="column">
            <Card monster={monster} />
        </div>
        
        )
        
    })


        
    )
}

export default CardList
