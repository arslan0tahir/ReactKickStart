import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'  // all components names should be in uppercase


class App extends Component {

  state={//reserved word
    persons:[
      {id:'sdfde',name:'Max',age:28},
      {id:'45rew',name:'Manu',age:26},
      {id:'cvf4g',name:'Staphinie',age:29}
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

  nameChangeHandler=(id,test,event) => {//if bind is used then last arg is event
      let personIndex=this.state.persons.findIndex(p=>{
        return p.id==id
      })
      let persons=[...this.state.persons];
      //let person={...person};

      persons[personIndex].name=event.target.value;
      console.log(test)



      this.setState({
        persons:persons
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
                    key={person.id}//key is reserved work and should be unique,index is not good iea because it keeps on shifting when item is deleted
                    name={person.name} 
                    age={person.age}
                    click={this.deletePersonHandler.bind(this,index)}
                    change={this.nameChangeHandler.bind(this,person.id,"check")}/>
                    //with bind last arg holds event (person.id,....,event)
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
