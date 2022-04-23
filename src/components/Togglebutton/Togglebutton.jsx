import React,{useState} from 'react'
import "./Togglebutton.scss"
const Togglebutton = (props) => {
  const toggle = ()=>{
    props.handletoggle();
  }
  
  return (
    <div>
        {/* Rounded switch  */}
        <label  className="switch" >
            <input type="checkbox" />
            <span className="slider round"id="toggle" onClick={toggle}></span>
        </label>
    </div>
  )
}

export default Togglebutton