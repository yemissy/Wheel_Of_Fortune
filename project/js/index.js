// TODO:  CREATE A SIMPLE UI USING THE DOM

let body =  document.getElementsByTagName('body')
let centerDiv = document.createElement('div')
let leftDiv = document.createElement('div')
let rightDiv = document.createElement('div')
let startBtn = document.createElement('button')

//Left div componenets
let guessedLetters = document.createElement('input')
let guessedWord = document.createElement('input')
let submitWrd = document.createElement('button')

//Right Div components


//TODO: CREATE STYLE FOR ELEMENTS

const bodyStyle = {
    backgroundColor: 'linear-gradient(#e66465, #9198e5)',
}
const centerStyle = {
    height : `${20}em`,
    width: `${35}em`,
    backgroundColor: '#00BDFF',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    left: `${10}em`, 
    top: `${10}em`
}

//Add unique style & attribtes to elements
function addToBody (...args){
    let elements = [...args]
    let styledEls = []
    let bodyHeading = document.createElement('h1')
    bodyHeading.innerText = 'Wheel Of Fortune'

    //Style the Body
    Object.assign(body.style, bodyStyle)
    body.appendChild(bodyHeading)

    for(let i = 0; i < elements.length; i++ ){
        if(elements[i] === centerDiv){
            elements[i].className = "centerDiv"
            Object.assign(elements[i].style, centerStyle)
            h1 = document.createElement('h1')
            h1.innerText = 'Guess The Word'
            elements[i].append(h1)
            styledEls.push(elements[i]) 
        }
    }

    //Append styeld elements to body
    styledEls.forEach(el => {
        // Object.assign(el.style, generalStyle)
        body.appendChild(el)
    })

}


addToBody(centerDiv, leftDiv, rightDiv)



// TODO: CREATE THE GAME FUNCTIONS