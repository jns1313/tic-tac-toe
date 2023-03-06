import React from 'react'

export default function Scores({score, playerX}) {

    const {xPlayer, oPlayer} = score

    return(
        <div className="scoreboard">
            <span className={`score-x ${!playerX && 'inactive'}`}>Player X: {xPlayer}</span>
            <span className={`score-o ${playerX && 'inactive'}`}>Player O: {oPlayer}</span>
        </div>
    )
}