// gets the word count and will return the puzzle as a string
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
    
}


const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error ('Unable to fetch city')
    }
}


const getLocation = async() =>{
    const response = await fetch(`https://ipinfo.io/json?token=f819c7b769771d`)
    if (response.status === 200){   
        return response.json()
    } else {
        throw new Error('Location not fetched')
    }
}
