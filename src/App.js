import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'  // all components names should be in uppercase


class App extends Component {

  state={//reserved word
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:26},
      {name:'Staphinie',age:29}
    ],
    showPersons: false

  }
  switchNameHandler=(newName) => {
    console.log("i am clicked")
    //dont manupilate state directly instead use set state
    this.setState({
      persons:[
        {name:newName,age:28},
        {name:'Manu',age:26},
        {name:'Staphinie',age:20}
      ]
    })
  }

  nameChangeHandler=(event) => {
      this.setState({
        persons:[
          {name:'Max',age:28},
          {name:event.target.value,age:26},
          {name:'Staphinie',age:20}
        ]
      })
  }
  togglePersonHandler=()=>{
    let personVisible=this.state.showPersons;
    this.setState({showPersons: !personVisible})
  }
  deletePersonHandler=(index)=>{
    //const persons=this.state.persons; as array is copied by reference so this method is not immutable
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons})
  }

  style={
    backgroundColor: 'White',
    font: 'inherit',
    border : '1px solid blue',
    padding : '8px',
    cursor : 'pointer'
  }
  
  render() {
    let persons=null;
    if (this.state.showPersons)
    {        
    
      persons=(
        <div>
                  {this.state.persons.map((person,index)=>{
                    return <Person 
                    name={person.name} 
                    age={person.age}
                    click={this.deletePersonHandler.bind(this,index)}/>
                  })}
              
        </div>
      )
    }

    return (
      <div className="App">
        <h1>
          Hi i am react app
        </h1>
        <p>
          Its really working
        </p>
        <button style={this.style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
