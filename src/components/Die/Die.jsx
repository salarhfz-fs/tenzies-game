import './Die.scss'

function Die({ idx, number, isHeld, holdDie }) {
    return (
        <div className={`die ${isHeld ? 'die--held' : ''}`} onClick={() => holdDie(idx, number)}>
            {number}
        </div>
    )
}

export default Die
