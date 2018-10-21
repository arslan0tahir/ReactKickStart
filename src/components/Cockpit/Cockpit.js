import React from 'react'
import classes from './Cockpit.module.css'

const cockpit =(props)=>{
    const myClasses=[];
    if (props.persons.length<=2){
      myClasses.push(classes.red);
    }
    if (props.persons.length<=1){
      myClasses.push(classes.bold);
    }
    let btnClass=classes.Green;
    if(props.showPersons){
        btnClass=classes.Red;
    }
    console.log(props.showPersons)
        
    return(
        <div className='Cockpit'>
            <h1>
            Hi i am react app
            </h1>
            <p className={myClasses.join(' ')}>
            Its really working
            </p>
            <button 
            onClick={props.clicked}
            className={btnClass}>
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;
