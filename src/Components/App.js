import React, { useState } from 'react'
import Startgame from './Startgame.js'
import Board from './Board.js'
import Scores from './Scores.js'

export default function App() {

    const [start, setStart] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [playerX, setPlayerX] = useState(true)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState({xPlayer:0, oPlayer:0})

    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function checkWinner(squares) {
        for (let i = 0; i < winningConditions.length; i++) {
            const [x, y, z] = winningConditions[i]

            if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
                // console.log(squares[x])
                setGameOver(true)
                return squares[x]
            }
        }
        return null
    }

    function startgame() {
        setStart(false)
    }

    function playAgain() {
        setSquares(Array(9).fill(null))
        setGameOver(false)
    }

    function resetScores() {
        setScore({xPlayer: 0, oPlayer: 0})
    }

    function handleClick(squareIndex) {
        const updateBoard = squares.map((value, index) => {
            if (index === squareIndex) {
                return playerX ? 'X' : 'O'
            } else {
                return value
            }
        })

        const winner = checkWinner(updateBoard)

        if (winner) {
            if (winner === 'X') {
                let {xPlayer} = score
                xPlayer++
                setScore({...score, xPlayer})
                // console.log(`Player X ${xPlayer}`)
            } else {
                let {oPlayer} = score
                oPlayer++
                setScore({...score, oPlayer})
                // console.log(`Player O ${oPlayer}`)
                }
        }
        checkWinner(updateBoard)
        setPlayerX(!playerX)
        setSquares(updateBoard)
    }


    return(
        <main>
            {start ? <Startgame startgame={startgame} /> :
                <>
                    <Scores score={score} playerX={playerX} /> 
                    <Board squares={squares} onClick={gameOver ? playAgain : handleClick} />
                </>
                }
            {start ? null : <div className="btn-container">
                <button className="btn restart-btn" onClick={playAgain}>Restart</button>
                <button className="btn reset-btn" onClick={resetScores}>Reset Scores</button>
            </div> }
        </main>
    )
}