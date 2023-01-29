import './Die.scss'

function Die({ idx, number, isHeld, freeze }) {
    return (
        <div className={`die ${isHeld ? 'die--held' : ''}`} onClick={() => freeze(idx, number)}>
            {number}
        </div>
    )
}

export default Die
