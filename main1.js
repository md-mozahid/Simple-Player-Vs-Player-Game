let winer = document.querySelector('.winer')
let winerScore = document.querySelector('.winer-score default-score')
let player1Score = document.querySelector('.player1-score')
let player2Score = document.querySelector('.player2-score')

let formElm = document.querySelector('form')
let inputElm = document.querySelector('.number')
//let inpSub = document.querySelector('.submit')
let reset = document.querySelector('.reset')

let player1Btn = document.querySelector('btn1')
let player2Btn = document.querySelector('btn2')
// class seletor end

function validateInput(inputVal) {
    let isInvalid = false
    //validation check
    //NaN !== NaN = true if value is not real number
    if (!inputVal || inputVal !== inputVal) {
        alert('please fill the input or provide number')
        isInvalid = true
    }
}


// Form validation
formElm.addEventListener('submit', (evt) => {
    //prevent default browser reload
    evt.preventDefault()
    //getting the input value
    //const inputVal = inputElm.value
    const inputVal = Number(inputElm.value)

    const isInvalid = validateInput()
    if (isInvalid) return
    //reset the input
    inputElm.value = ''
    console.log(inputVal);
})