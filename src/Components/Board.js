import React from 'react'
import Square from './Square.js'

export default function Board({squares, onClick}) {
    return(
        <div className="square-container">
            {squares.map((value, index) => {
                return <Square
                key={index}
                value={value}
                // this has to be a function to make it work
                onClick={() => value === null && onClick(index)}
                />
            })}            
        </div>
    )
}