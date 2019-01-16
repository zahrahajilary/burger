import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'
import './SideDrawer.css'
const sideDrawer =(props)=>{
    var attachmentclass ;
    if(props.open){
        attachmentclass = `SideDrawer Open` 
    }
    else {
        attachmentclass = `SideDrawer Close`
    }

    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachmentclass}>
            <Logo height='8%'/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )
} 

export default sideDrawer