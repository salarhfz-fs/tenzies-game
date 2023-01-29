function generateRandomIntegerInRange(min, max) {
    if ([min, max].every(Number.isInteger) && min < max) {
        return Math.floor(Math.random() * max - min + 1)
    }
    return null
}

export {
    generateRandomIntegerInRange,
}
