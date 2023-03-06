import React from 'react'

export default function Square({value, onClick}) {

    const styles = value === 'X' ? 'square x' : 'square o'

    return(
        <div className={styles} onClick={onClick}>{value}</div>
    )
}