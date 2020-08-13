import React from 'react'

const Card = (props) => {
    return (
        <div className="ui fluid card" style={{backgroundColor:"lightGrey"}}>
            <div className ="content">
                <img src={`https://source.unsplash.com/180x180/?people,${props.monster.id}`} alt="#"/>
                <h3 className="header">
                    {props.monster.name}
                </h3>
                <div className="description">
                <a href="mailto:{props.monster.email}">{props.monster.email}</a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Card
