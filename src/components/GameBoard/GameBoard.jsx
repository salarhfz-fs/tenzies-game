import { useEffect, useState } from 'react'

import Die from '../Die'
import { generateRandomIntegerInRange } from '../../common/utils/randomNumbers'

import './GameBoard.scss'

function GameBoard() {
    const [dice, setDice] = useState(init)
    const [won, setWon] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(null)

    useEffect(() => {
        setWon(dice.every(die => die.isHeld))
    }, [dice])

    function init() {
        return Array.from(
            { length: 10 },
            (_, idx) => ({ number: generateRandomIntegerInRange(1, 6), isHeld: false, key: idx })
        )
    }

    function freeze(dieIdx, dieNumber) {
        if (selectedNumber === null || selectedNumber === dieNumber) {
            setDice(prev => prev.map((die, idx) => idx === dieIdx ? {
                ...die, isHeld: true
            } : die))
            setSelectedNumber(dieNumber)
        }
    }

    function roll() {
        if (won) setDice(init())
        else setDice(prev => prev.map(die => die.isHeld ? die : { ...die, number: generateRandomIntegerInRange(1, 6) }))
        setSelectedNumber(null)
    }

    return (
        <main className="game-board">
            <section className="game-board__hero">
                <h1 className="game-board__hero__heading">Tenzies</h1>
                <h3 className="game-board__hero__desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
            </section>
            <section className="game-board__dice">
                {dice.map((die, idx) => <Die number={die.number} key={die.key} idx={die.key} isHeld={die.isHeld} freeze={freeze} />)}
            </section>
            <button className="game-board__roll" onClick={roll}>
                {won ? 'Reset' : 'Roll'}
            </button>
        </main>
    )
}

export default GameBoard
