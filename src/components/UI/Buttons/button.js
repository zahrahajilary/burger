import React from 'react'
import  './Button.css'

const button = (props) => {
    
    if(props.btnType === 'Danger'){
        return <button className="Button Danger" onClick={props.clicked}>{props.children}</button>
    }
    if(props.btnType === 'Success'){
        return <button className="Button Success" onClick={props.clicked}>{props.children}</button>
    }
}
     
  
    

export default button