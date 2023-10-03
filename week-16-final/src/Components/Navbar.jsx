import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {

    return (
        <div className="navbar"> 
            <p><Link to ="/">Home</Link></p>
            <p><Link to ="/jedi">Jedi</Link></p>
            <p><Link to ="/sith">Sith</Link></p>
        </div>
    )
}