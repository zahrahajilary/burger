import React from 'react'
import '../DrawerToggle/DrawerToggle.css'

const drawerToggole = (props)=>(
    <div>
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default drawerToggole