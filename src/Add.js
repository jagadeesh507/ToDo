import React from 'react'
import './App.css';
import {nanoid} from 'nanoid'
import { useState,useRef } from 'react'
export default function Add() {
    const [input,setInput]=useState("");
    const [arr,SetArr]=useState([{ID:"",name:""},]);
    const inputRef=useRef();
    const [Conform, setConform]=useState(false);
    const handleChange=(e)=>setInput(e.target.value);
    const handleAdd=()=> {
        SetArr([...arr,{id:nanoid,name:input}]);
        setInput("");
    }
    //console.log(arr);
    const handleDelete=(li)=>SetArr(arr.filter((val)=>val!==li))
    const handleEdit=li=>{
      setInput(li.name);
      SetArr(arr.filter((val)=>val!==li));
      inputRef.current.focus();
    }
    const handleKeyPress = e => {
      if (e.key === "Enter") {
        handleAdd();
      }
    };
    const handleConform=()=>setConform(!Conform);
  return (
    <div>
        <input type='text'placeholder='enter value'value={input}onKeyPress={handleKeyPress} onChange={(e)=>handleChange(e)} ref={inputRef}/>
        <button onClick={()=>handleAdd()}>Add</button>
        {
            arr.map((e)=>
            <div>
                {e.name}
            <button onClick={()=>handleDelete(e)}>Delete</button>
            <button onClick={()=>handleEdit(e)}>Edit</button>
           <button onClick={()=>handleConform()}>Conform</button>  
</div>)

        }
    </div>
  )
}

