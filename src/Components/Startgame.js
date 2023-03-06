import React from 'react'

export default function Startgame({startgame}) {

    return(
        <>
            <h1 className="main-title">Tic-Tac-Toe Game</h1>
            <button className="btn" onClick={startgame}>Start Game</button>
        </>
    )
}