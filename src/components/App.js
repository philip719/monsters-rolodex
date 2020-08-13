import React, { Component } from 'react';
import CardList from './CardList';
import Header from "./Header"
import SearchBox from './SearchBox';



class App extends Component {
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField:""
        };
    };

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=> this.setState({monsters:users}))
        
    }

    

    render() {
        
        const handleChange = (e)=>{this.setState({searchField: e.target.value})}
        
        // object destructuring out the state
        const {monsters, searchField}= this.state
        //based on input captured above, filter the monster name list for a new filtered list

        const filteredList = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField))

        return (
            <div className="ui center aligned container">
                <Header/>     
                <SearchBox handleChange= {handleChange}/><hr/>
                <div className="ui four column grid">
                    <CardList monsters={filteredList} />
                </div>
            </div>
            
        );
    };
};

export default App;