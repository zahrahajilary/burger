import React from 'react'
import Backdrop from './Backdrop.css'

const backdrop = (props)=>{
   return (
      props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
   )
}
export default backdrop