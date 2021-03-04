// TODO:  CREATE A SIMPLE UI USING THE DOM
let bodyTag =  document.getElementsByTagName('body')[0]
let centerDiv = document.createElement('div')
let guessDiv = document.createElement('div')
let startBtn = document.createElement('button')
let guessedWrdInput = document.createElement('input')
let submitWrdBtn = document.createElement('button')
let newWordBtn = document.createElement('button')
let hintDiv = document.createElement('div')
let randomWord = {word: '', guessCharacters:[]}



//TODO: CREATE STYLE FOR ELEMENTS

const bodyStyle = {
    //  backgroundColor: '#e66465'
    textAlign: 'center',
    margin: `${0}em`
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
    right: `${26}em`
}
const guessWrdInputStyle = {
    width: `${9}em`,
    height: `${1.9}em`,
    marginTop: `${3}em`,
    borderRadius: `${1}em`,
    marginLeft: `${4}em`
}
const guessDivStyle = {
    display: 'flex',
    position: 'absolute',
    left: `${2}em`,
    top: `${21.7}em`
}

const newWordSBtntyle = {
    width: `${10}em`,
    height: `${10}em`,
    backgroundColor: 'white',
    borderRadius: `${2}em`,
    position: 'absolute',
    right: `${15}em`,
    top: `${26}em`
}

const hintDivStyle = {
    width: `${28}em`,
    height: `${3}em`,
    position: 'relative',
    top: `${9}em`,
    left :`${3.3}em`,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-evenly',
    visibility: 'hidden'
}

const timerDivStyle = {
    width: `${8}em`,
    height: `${8}em`,
    backgroundColor: 'white',
    borderRadius: `${2}em`,
    position: 'relative',
    left: `${38.4}em`,
    bottom: `${3}em`,
    border: 'solid black'
}

//Add unique style & attribtes to elements
function addToBody (){

    let bodyHeading = document.createElement('h1')
    bodyHeading.innerText = 'Wheel Of Fortune'
    

    //Style the Body
    Object.assign(bodyTag.style, bodyStyle)
    bodyTag.append(bodyHeading)

    //Style center Div and the start button and add attributes
    centerDiv.className = "centerDiv"
    startBtn.className = 'startButton'
    startBtn.disabled = false
    startBtn.innerText = 'START'

    h1 = document.createElement('h1')
    theHint = document.createElement('h3')
    hintText = document.createElement('h3')

    hintDiv.id = "hint"
    hintText.id = 'hintText'
    theHint.id = "theHint"

    h1.innerText = 'Guess The Word'
    hintText.innerText = 'You Get A hint: '
    theHint.innerText = ''
   
    hintDiv.appendChild(hintText)
    hintDiv.appendChild(theHint)

    timerDiv = document.createElement('div')
    timerDiv.id = "timer-div"
    time = document.createElement('h1')
    time.id = "time"



    timerDiv.appendChild(time)

    Object.assign(timerDiv.style, timerDivStyle)

    Object.assign(centerDiv.style, centerStyle)
    Object.assign(startBtn.style, startBtnStyle)
    Object.assign(hintDiv.style, hintDivStyle)

    centerDiv.append(h1, startBtn, timerDiv,hintDiv)
    
    //Style guesswordinput and add attribute
    guessedWrdInput.id = "Guessed-Word-Input"
    guessedWrdInput.type = "text"
    guessedWrdInput.name = "name"
    guessedWrdInput.value = ""
    guessDiv.className = "sideDivs" 
    submitWrdBtn.id = "submitWord"
    h4 = document.createElement('h4')
    h4.innerText = "Enter Your Guessed Word: "

    h4Style = {
        position: 'relative',
        top: `${1.7}em`
    }
    submitWrdBtn.innerText = "ENTER"
    guessDiv.append(h4, guessedWrdInput)
    
    Object.assign(h4.style, h4Style)
    Object.assign(guessedWrdInput.style, guessWrdInputStyle)
    Object.assign(guessDiv.style, guessDivStyle)
    Object.assign(submitWrdBtn.style, submitWrdBtnStyle)

    //Create and style Randomizer
    newWordBtn.innerText = "Press To Get A New Word"

    Object.assign(newWordBtn.style, newWordSBtntyle)
    

    bodyTag.append(centerDiv, guessDiv, submitWrdBtn, newWordBtn)

}


addToBody()

// TODO: CREATE THE GAME FUNCTIONS


//Show the empty lines when new word button is clicked
function clickNewBtn() {
    let clickCount = 0
    let str = ""
    newWordBtn.addEventListener('click', () => {
        prevClick = clickCount
        clickCount += 1
        currentWord = getRandomWord()
        console.log(currentWord)
        str = ""
        randomWord.word = currentWord

        hintDiv = document.getElementById('hint')
        theHint = document.getElementById('theHint')

        //Create dashes
        let blankStr = new Array(currentWord.length)
        while(blankStr.length > 0){
            str += '_' + '  '
            blankStr.length -= 1
        }
        console.log(str)
        h1 = document.createElement('h1')
        h1.id = "dash-str"
        h1.innerText = str
        div = document.createElement('div')
        div.id = "dash-div"
        div.appendChild(h1)

        let dashDivStyle ={
            width:`${20}em`,
            height:`${5}em`,
            position:'relative',
            left: `${7.5}em`,
            bottom: `${12}em`
        }

        Object.assign(div.style, dashDivStyle)
        centerDiv.append(div)

        while(clickCount > 0){
            dashStr = document.getElementById('dash-str')
            dashDiv = document.getElementById('dash-div')
            centerDiv.removeChild(dashDiv)
            dashStr.innerText = str
            centerDiv.append(div)

            if(startBtn.disabled === true){
                startBtn.disabled = false
            }
            
            clickCount -= 1
            theHint.innerText = ""
            hintDiv.style.visibility = "hidden"
        }
        charInput = document.getElementById('char-input')
        charInput = ""
        console.log(currentWord)
        revealLetters(currentWord, str, clickCount)
    })

}
clickNewBtn()

//Reaveal instances of the letter
function revealLetters(word, dashes, clicks){
    console.log(word)
    currentWrd = word
    letters = currentWrd.split('')
    randomIndx = []
    hintIndexes = []
    h1StrEl = document.getElementById("dash-str")
    charInput = document.getElementById('char-input')
    dashstrs =  h1StrEl.innerText.split(' ')
    strtBtnClick = 0
    
    hintDiv = document.getElementById('hint')
    theHint = document.getElementById('theHint')
    

    // get 3 random numbers
    if(letters.length <= 6){
        j  = 2
        while(j > 0){
            index = Math.floor(Math.random() * letters.length)
            if(randomIndx.includes(index)){
                newIndex  = index = Math.floor(Math.random() * letters.length)
                randomIndx.push(newIndex)
            }else{
                randomIndx.push(index)
            }
            j --
        }
    }
    else{
        j = 3
        while(j > 0){
            index = Math.floor(Math.random() * letters.length)
            if(randomIndx.includes(index)){
                newIndex  = index = Math.floor(Math.random() * letters.length)
                randomIndx.push(newIndex)
            }else{
                randomIndx.push(index)
            }
            j --
        }
    }

    if(letters.length <= 6){
        i = 2
        while(i > 0){

            index = Math.floor(Math.random() * letters.length)
            if(hintIndexes.includes(index)){
                hintIndex  = index = Math.floor(Math.random() * letters.length)
                hintIndexes.push(hintIndex)
            }else{
                hintIndexes.push(index)
            }
            i --
        } 
    }
    else{
        i = 3
        while(i > 0){

            index = Math.floor(Math.random() * letters.length)
            if(hintIndexes.includes(index)){
                hintIndex  = index = Math.floor(Math.random() * letters.length)
                hintIndexes.push(hintIndex)
            }else{
                hintIndexes.push(index)
            }
            i --
        } 
    }
    
    console.log(letters, currentWrd, "307 ")
    //onclick of start reveal letters
    startBtn.addEventListener('click', () => {
        charInput.disabled === true ? false : true
        
        console.log(letters, currentWrd, "310 ")
        strtBtnClick += 1
        console.log(letters, currentWrd, randomIndx, hintIndexes, "315 ")
        //Check if all indexes are equal 
        equalIndx = randomIndx.every(currentVal => currentVal === randomIndx[0])
        if(!equalIndx === true){
            for(let i = 0 ; i < dashstrs.length; i++){
                if(randomIndx.includes(i)){
                    console.log("I'm here 334")
                    theIndx = i
                    if(dashstrs[theIndx] === "_"){
                        dashstrs[i] = letters[theIndx]
                        console.log("I'm here 338")
                        if(startBtn.disabled === true){
                           startBtn.disabled = false
                           console.log("I'm here 341")
                        }
                    }
                }
            }
            h1StrEl.innerText = dashstrs.join(' ')
            dashstrs = h1StrEl.innerText.split(' ')
            console.log(h1StrEl.innerText, dashStr, 'im here 344')
            if(letters.length >= 7){
                console.log('im here 347')
                for(let i = 0 ; i < dashstrs.length; i++){
                    console.log('here 1')
                    if(hintIndexes.includes(i)){
                        console.log('here 2')
                        theIndx = i
                        if(dashstrs[theIndx] === "_"){
                            dashstrs[theIndx] = letters[theIndx]
                            console.log('here 3')
                            console.log('here 5')
                        }
                    }
                }
            }
            theHint.innerText = dashstrs.join(' ')
            console.log(theHint.innerText, theHint.innerText,'im here 344')
            hintDiv.style.visibility = "visible"
        }
        else{
            //Edge Case word = ["a", "u", "t", "h", "o", "r"], randomindx = [4,4]
            //All indexes all are true/same. or word greater than 7 This will be too hard to guess. Create a hint
            dashstrs[randomIndx[0]] = letters[randomIndx[0]]
            h1StrEl.innerText = dashstrs.join(' ')
            console.log(h1StrEl.innerText, dashstrs)
            dashstrs = h1StrEl.innerText.split(' ')
            console.log(dashstrs)
            console.log(hintIndexes)
            if(equalIndx === true || letters.length > 7){
                for(let i = 0 ; i < dashstrs.length; i++){
                    console.log('here 1')
                    if(hintIndexes.includes(i)){
                        console.log('here 2')
                        theIndx = i
                        if(dashstrs[theIndx] === "_"){
                            dashstrs[theIndx] = letters[theIndx]
                            console.log('here 3')
                            console.log('here 5')
                        }
                    }
                }
                // theHint.innerText = dashstrs.join(' ')
                // hintDiv.style.visibility = "visible"
                strtBtnClick -= 1
            }        
        }
        charInput.disabled = false
        console.log(strtBtnClick, )
        hintDiv.style.visibility = "visible"
    })
    getUserInput(dashstrs, h1StrEl, letters)
    getWord(letters.join(''), h1StrEl)
}

//Create char guess div
function addCharGuessDiv(){
    //Create elements to enter guesses. 
    let charDiv = document.createElement('div')
    let h3 = document.createElement('h4')
    let inputField = document.createElement('input')
    h3.innerText = "Enter Up To 3 Consonants And One Vowel: "
    inputField.id = "char-input"
    inputField.type = "text"
    inputField.value = ""

    let charDivStyle = {
        width:`${25}em`,
        height:`${5}em`,
        position:'relative',
        display: 'flex',
        right: `${26}em`,
        bottom: `${10}em`,
        color: 'black',
        textAlign: 'center'
    }
    let inputFieldStyle = {
        width: `${9}em`,
        height: `${1.9}em`,
        marginTop: `${2}em`,
        borderRadius: `${1}em`,
        marginLeft: `${1}em`
    }
    Object.assign(inputField.style, inputFieldStyle)
    Object.assign(charDiv.style, charDivStyle)
    charDiv.append(h3, inputField)
    centerDiv.append(charDiv)

}
addCharGuessDiv()
//Write a function to get user input for characters
function getUserInput(dashArr, htmlEl, wordArr){
    console.log(dashArr, htmlEl, wordArr)
    let inputField = document.getElementById('char-input')
    let j = 0


    inputField.addEventListener('keyup', (event) => {
        input = event.target.value
        console.log(input)
        regEx = /[0-9]/g
        alphabets = ["a","b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y","z"]
        randomWord.guessCharacters.push(input)

        if(input.match(regEx)){
            throw new Error("Please Enter Valid Alphabets")
        }
        else{
            console.log(wordArr, input,wordArr.includes(input), 'here here' )
            //Check if e.key is included in word, then Iterate through the wordArr, to find the position of the letter
            if(wordArr.includes(input)){
                for(let i = 0; i < wordArr.length; i++){
                    if(wordArr[i] === input){
                        //check if dashArr[i] doesn not have a letter
                        if(dashArr[i] === "_"){
                            dashArr[i] = input
                            htmlEl.innerText = dashArr.join(' ')
                        }

                    }
                }
                event.target.value = ''
                // htmlEl.innerText = dashArr.join(' ')
                dashesLeft = dashArr.filter(dash => dash === "_").length
                if(dashesLeft <= 2){
                    inputField.disabled = true
                    alert("Attempt To Guess the Full Word")
                }
                else{
                    inputField.disabled = false
                }
            }
            else{
                inputField.value = ""
                // event.target.value = ''
            }
        }
    })
}


//Write a function to get user input for words

function getWord(word, h1StrEl){
    console.log(word)
    let inputField = document.getElementById("Guessed-Word-Input")
    let submit = document.getElementById('submitWord')

    inputField.addEventListener('keypress', (event) => {
        if(event.key === 'Enter'){
            input = event.target.value
            if(input === word){
                h1StrEl.innerText = input
                window.alert("You Guessed Correctly")
                h1StrEl.innerText = word
                event.target.value = ""
            }
            else{
                h1StrEl.innerText = input
                window.alert("Your Guess Is Incorrect")
                h1StrEl.innerText = word
                event.target.value = ""

            }
        }
    })
    submit.addEventListener('click', () =>{
        // input = event.target.value
        if(inputField.value === word){
            window.alert("You Guessed Correctly")
            h1StrEl.innerText = word
            inputField.value = ""
        }
        else{
            window.alert("Your Guess Is Incorrect")
            h1StrEl.innerText = word
            inputField.value = ""
        }
    })
}

//Function timer

// function timer(){

// }