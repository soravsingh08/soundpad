import React from "react"


export default function Pad(props){

 

    return(
        <button
        onClick={props.handleClick}
         style={{backgroundColor : props.color}}
         className={props.on ? "on": undefined}
        
         
         
         ></button>
    )
}