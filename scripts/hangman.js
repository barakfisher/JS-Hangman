
class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing'    
    }

    get puzzle(){
        let puzzle ='';
        this.word.forEach( (letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });
        return puzzle;
    }

    makeGuess(guess){
            guess = guess.toLowerCase()
            const isUnique = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)
            if (this.status !== 'playing'){
                return;
            }
            if (isUnique){
                this.guessedLetters.push(guess);
            } 
            if (isUnique && isBadGuess) {
                this.remainingGuesses--;
            }
            this.calculateStatus()
        }
        
    calculateStatus(){
        const currentPuzzle = this.getPuzzle()
        const isDone = !currentPuzzle.includes('*')
        if (isDone){
            this.status = 'winning'
        } else if (this.remainingGuesses === 0){
            this.status = 'losing'
        } else { 
            this.status = 'playing'
        }
    }

    calculateStatus() {
        const currentPuzzle = this.puzzle
        const isDone = !currentPuzzle.includes('*')
        if (isDone){
            this.status = 'winning'
        } else if (this.remainingGuesses === 0){
            this.status = 'losing'
        } else { 
            this.status = 'playing'
        }
    }
    
    get statusMessage(){
        if(this.status === 'winning'){
            return 'Congrats - you won!'
        } else if(this.status === 'losing'){
            return `Nice try - the word was "${this.word.join('')}"`
        } else {
            return `Guesses left ${this.remainingGuesses}`
        }
    }  
}
