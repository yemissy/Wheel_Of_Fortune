// TODO:  CREATE A SIMPLE UI USING THE DOM

const {newWord} = require('./randomWord.js')
console.log(newWord)

let body =  document.getElementsByTagName('body')[0]
let centerDiv = document.createElement('div')
let guessDiv = document.createElement('div')
let startBtn = document.createElement('button')
let guessedWrdInput = document.createElement('input')
let submitWrdBtn = document.createElement('button')
let newWordBtn = document.createElement('button')



//TODO: CREATE STYLE FOR ELEMENTS

const bodyStyle = {
    //  backgroundColor: '#e66465'
    textAlign: 'center'
}

const centerStyle = {
    height : `${20}em`,
    width: `${35}em`,
    backgroundColor: '#00BDFF',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    left: `${26}em`, 
    top: `${5}em`
}
const startBtnStyle = {
    height : `${3}em`,
    width: `${7}em`,
    backgroundColor: '#ffffff',
    borderRadius: `${1.9}em`,
    position: 'absolute',
    top: `${20}em`,
    left: `${17}em`
}
const submitWrdBtnStyle = {
    height : `${3}em`,
    width: `${7}em`,
    backgroundColor: '#ffffff',
    borderRadius: `${1.9}em`,
    position: `relative`,
    top: `${3}em`,
    right: `${25.8}em`
}
const guessWrdInputStyle = {
    width: `${9}em`,
    height: `${1.9}em`,
    marginTop: `${1}em`,
    borderRadius: `${1}em`,
    marginLeft: `${1}em`
}
const guessDivStyle = {
    // border: 'solid red',
    display: 'flex',
    position: 'absolute',
    left: `${2}em`,
    top: `${23}em`
}

const newWordSBtntyle = {
    width: `${10}em`,
    height: `${10}em`,
    backgroundColor: 'white',
    borderRadius: `${2}em`,
    position: 'absolute',
    right: `${15}em`,
    top: `${25}em`
}

//Add unique style & attribtes to elements
function addToBody (){

    let bodyHeading = document.createElement('h1')
    bodyHeading.innerText = 'Wheel Of Fortune'
    
    console.log(body)

    //Style the Body
    Object.assign(body.style, bodyStyle)
    body.append(bodyHeading)

    //Style center Div and the start button and add attributes
    centerDiv.className = "centerDiv"
    startBtn.className = 'startButton'
    h1 = document.createElement('h1')
    h1.innerText = 'Guess The Word'
    startBtn.innerText = 'START'
    Object.assign(centerDiv.style, centerStyle)
    Object.assign(startBtn.style, startBtnStyle)

    centerDiv.append(h1, startBtn)
    
    //Style guesswordinput and add attribute
    guessedWrdInput.className = "Guessed-Word-Input"
    guessDiv.className = "sideDivs" 
    submitWrdBtn.className = "submitWord"
    h3 = document.createElement('h3')
    h3.innerText = "Enter Your Guessed Word: "
    submitWrdBtn.innerText = "ENTER"
    guessDiv.append(h3, guessedWrdInput)
    

    Object.assign(guessedWrdInput.style, guessWrdInputStyle)
    Object.assign(guessDiv.style, guessDivStyle)
    Object.assign(submitWrdBtn.style, submitWrdBtnStyle)

    //Create and style Randomizer
    newWordBtn.innerText = "Press To Get A New Word"

    Object.assign(newWordBtn.style, newWordSBtntyle)
    

    body.append(centerDiv, guessDiv, submitWrdBtn, newWordBtn)

}


addToBody()

// TODO: CREATE THE GAME FUNCTIONS

//Show the empty lines when new word button is clicked

function getNewWord(word){

    let currentWord = {
        word: ""
    }

    console.log(word)
}

getNewWord(newWord)