//Project Development

/*
1.Clear idea about tools 
2.How to work with tools (logic Development - problem solving)
3.Understanding the flow of project Development
*/

/*
clear idea about the project(Mock Up, prototype )
Having mental modal about the project
Guessing the steps
Follow the steps
*/

//IIFE- Immediately Invoked function expression)

;(() => {
    //selection
    const formElm = document.querySelector('form')
    const inputElm = document.querySelector('.number')
    
    function validateInput(inputVal) {
        let isInValid = false
        // validation check
        //NaN !== NaN = result true if value is not real number
        if (!inputVal || inputVal !== inputVal) {
            alert('please fill the input or provide number')
            isInValid = true
        }
        return isInValid
    }
    
    function resetInput() {
        //reset the input
        inputElm.value = ''
    }

    //handling Submit part
    formElm.addEventListener('submit', (evt) => {
        //prevent default browser reload
        evt.preventDefault()
        //reset the game in case anyone change and submit new number during playing
        
        
        const inputVal = Number(inputElm.value)
        //getting the input value
        //const inputVal = inputElm.value
        const isInValid = validateInput(inputVal)
        if (isInValid) {
            console.log('some problem')
            return
        }
    
        //reset the input
        resetInput()
        
        //setting on win score
        winScore.textContent = inputVal
    
        console.log(inputVal);
    })
    //selection
    const p1ScoreElm = document.querySelector('.player1')
    const p2ScoreElm = document.querySelector('.player2')
    const p1Btn = document.querySelector('.p1btn')
    const p2Btn = document.querySelector('.p2btn')
    const winScore = document.querySelector('.winer-score span')
    const winer = document.querySelector('.wining-msg')
    const resetElm = document.querySelector('.reset') 
    
    let p1Score
    let p2Score
    let p1Turn
    let p2Turn
    let defaultWinScore
    let isGameOver
    
    //for reset value
    function setInitialVal() {
        p1Score = 0
        p2Score = 0
        p1Turn = true
        p2Turn = false
        defaultWinScore = 3
        isGameOver = false
    }
    setInitialVal()
    
    function setInitialDOM() {
        winScore.textContent = defaultWinScore
        p1ScoreElm.textContent = p1Score
        p2ScoreElm.textContent = p2Score
    
        if (!p1Turn) {
            p1Btn.setAttribute('disabled', 'disabled')
        }
        if (!p2Turn) {
            p2Btn.setAttribute('disabled', 'disabled')
        }
        //resetting winner player message
        winer.textContent = ''
    }
    setInitialDOM()
    
    //setting data on memory
    // winer = inputVal
    
    p1Btn.addEventListener('click', (evt) => {
        if (p1Turn) {
            p1Score++
            p1ScoreElm.textContent = p1Score
        }
        p1Turn = false
        p1Btn.setAttribute('disabled', 'disabled')
        p2Turn = true
        p2Btn.removeAttribute('disabled')
    
        if(p1Score === defaultWinScore) {
            isGameOver = true
            winer.textContent = 'Player 1 is Winer'
            p2Btn.setAttribute('disabled', 'disabled')
        }
    })
    p2Btn.addEventListener('click', (evt) => {
        if (p2Turn) {
            p2Score++
            p2ScoreElm.textContent = p2Score
        }
        p2Turn = false
        p2Btn.setAttribute('disabled', 'disabled')
        p1Turn = true
        p1Btn.removeAttribute('disabled')
        if(p2Score === defaultWinScore) {
            isGameOver = true
            winer.textContent = 'Player 2 is Winer'
            p1Btn.setAttribute('disabled', 'disabled')
        }
    })
    
    resetElm.addEventListener('click', () => {
        setInitialVal()
        setInitialDOM()
    })
})()


