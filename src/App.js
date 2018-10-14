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
    ]

  }
  switchNameHandler=()=>{
    console.log("i am clicked")
    //dont manupilate state directly instead use set state
    this.setState({
      persons:[
        {name:'Maxmilliun',age:28},
        {name:'Manu',age:26},
        {name:'Staphinie',age:20}
      ]
    })
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
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
