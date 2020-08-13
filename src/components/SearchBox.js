import React from 'react'

const SearchBox = (props) => {
    
    return (
        
            <div className="ui icon input" >
            <input type="search" placeholder="User Search" onChange={props.handleChange}/>
            <i className="search icon"></i>
            </div>
        
        
    )
}

export default SearchBox;
