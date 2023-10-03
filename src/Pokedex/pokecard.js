import React from "react"
import "./pokecard.css"


function Pokecard({id, name, type, exp}) {
    const link = `https://raw.githubusercontent.com/` +
    `PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{name}</div>
            <img className="Pokecard-image" src={link} alt={name}/>
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">EXP: {exp}</div>
        </div>
    )
}

export default Pokecard;