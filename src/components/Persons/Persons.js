import React, {component} from 'react'
import Person from './Person/Person'

const Persons=(props)=>( //curly brackets are ommited because we have only jsx to be returned
        props.persons.map((person,index)=>{
        return <Person 
        key={person.id}//key is reserved work and should be unique,index is not good iea because it keeps on shifting when item is deleted
        name={person.name} 
        age={person.age}
        click={props.clicked.bind(this,index)}
        change={props.changed.bind(this,person.id,"check")}/>
        //with bind last arg holds event (person.id,....,event)
    })  

)

export default Persons



