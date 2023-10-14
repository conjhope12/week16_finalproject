import React from "react"
import Alertbtn from "../Components/Alertbtn"
import Cardsss from "../Components/Cardsss"

// I chose to attache these two componets to this page because I only wanted these components to appear on the home page.

export default function Home() {

    return (
        <div>
            <Alertbtn />
            <h3 className="cardsss-title" >What do you think of the table below?</h3>
            <Cardsss />
        </div>
    )
}