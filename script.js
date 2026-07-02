const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const p1Btn = document.querySelector('#p1Button')
const p2Btn = document.querySelector('#p2Button')
const resetBtn = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')



let p1Score = 0
let p2Score = 0
let isGameover = false
let winningScore = 5

p1Btn.addEventListener('click',function (){
    if(!isGameover){
        p1Score += 1
        if(p1Score === winningScore){
            isGameover = true
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        p1Display.textContent = p1Score
    }
})


p2Btn.addEventListener('click',function (){
    if(!isGameover){
        p2Score += 1
        if(p2Score === winningScore){
            isGameover = true
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        p2Display.textContent = p2Score
    }
})

winningScoreSelect.addEventListener('change',function() {
     winningScore = parseInt(this.value)
    reset()
})

const reset = () =>{
    isGameover = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Display.classList.remove('winner','loser')
    p2Display.classList.remove('loser','winner')

}
resetBtn.addEventListener('click',reset)





