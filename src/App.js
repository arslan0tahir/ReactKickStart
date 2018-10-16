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

  style={
    backgroundColor: 'White',
    font: 'inherit',
    border : '1px solid blue',
    padding : '8px',
    cursor : 'pointer'
  }
  render() {
    return (
      <div className="App">
        <h1>
          Hi i am react app
        </h1>
        <p>
          Its really working
        </p>
        <button style={this.style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        { this.state.showPersons?
          <div>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
            <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Max!')}
                change={this.nameChangeHandler}>My Hobby is racing
            </Person>
            <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
          </div>:null
        }
      </div>
    );
  }
}

export default App;
