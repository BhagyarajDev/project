import React from 'react'
import './navbar.css'

function navbar() {
    return (
        <div>
            <ul>
                <li><a class="active" href="#home" >HOSPITAL MANAGER</a></li>
                <li><a href="#Employee">Employee</a></li>
                <li><a href="#Department">Department</a></li>
                <li><a href="#Department head">Department head</a></li>
            </ul>
        </div>
    )
}

export default navbar