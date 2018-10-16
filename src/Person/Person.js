import React from 'react'
import './Person.css'


const person = (props) => {
    return (
        <div className='Personaa'>
            <p onClick={props.click}>i am a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person;