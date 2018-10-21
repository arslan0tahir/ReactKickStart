import React, { Component } from 'react';
import './App.css';
import classes from './App.module.css';

import Person from '../components/Persons/Person/Person'  // all components names should be in uppercase
import Radium from 'radium'

import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'


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


  
  render() {
   

    let persons=null;
    
    if (this.state.showPersons)
    {        
    
      persons=(
        <div>
                 <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
              
        </div>
      )
     
      // style.backgroundColor="red";
      // style[':hover'].color="black";
      // style[':hover'].backgroundColor="salmon";

    }

    

    console.log(classes)
    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}/>

    
        
        {persons}
      </div>
    );
  }
}

export default Radium(App);
