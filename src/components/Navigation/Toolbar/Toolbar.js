import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import './Toolbar.css'
const toolbar = (props)=>(
    <header className="Toolbar">
    <DrawerToggle clicked={props.openSide}/>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    
    </header>

)
export default toolbar