import React from 'react'
import style from './Person.module.css'


const person = (props) => {
    return (
        <div className={style.Person}>
            <p onClick={props.click}>i am a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person;