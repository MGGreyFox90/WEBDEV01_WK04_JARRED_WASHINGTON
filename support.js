export const rubric = (score, possible) => {
    const percentage = score / possible * 100
    if (percentage < 50) {
        return `You failed. ${percentage}% | ${score}/${possible}`
    } else {
        return `Congrats, you passed! ${percentage}% | ${score}/${possible}`
    }
}
export const welcome = () => {
    console.clear()
    console.log('Welcome to the Social Media Tech Quiz.')
    console.log(' ')
}