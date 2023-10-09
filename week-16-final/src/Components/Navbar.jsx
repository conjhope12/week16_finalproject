import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {

    return (
        <div className="navbar"> 
            <ul className="navbar-list">
                <li><p><Link to ="/">Home</Link></p></li>
                <li><p><Link to ="/jedi">Jedi</Link></p></li>
                <li><p><Link to ="/sith">Sith</Link></p></li>
            </ul>
        </div>
    )
}