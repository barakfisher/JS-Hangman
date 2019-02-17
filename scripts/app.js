// HTTP
//request - we want to do

//response - what was done


let game1
const puzzleElement = document.querySelector('#puzzle');

const statusElement = document.querySelector('#status');
const statusMessageElement = document.querySelector('#message');


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess)
    render()
})

const render = () =>{
    puzzleElement.innerHTML = ''
    statusElement.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })


// getCurrentCountry().then((country) =>{
//     console.log(country.name)
// }).catch((err) => {
//     console.log('Error:', err)
// })


