const die = document.querySelector('.die')
const roll = document.querySelector('.roll')
const img = die.querySelector('img')

const players = [
    { player: document.querySelector('.player1'), location: 0 },
    { player: document.querySelector('.player2'), location: 0 },
    { player: document.querySelector('.player3'), location: 0 },
    { player: document.querySelector('.player4'), location: 0 }
]

const numPlayers = 4
let turn = 0

function gameOver(){

}

function movePlayer(turn,num,spots){
const player = players[turn]
player.location += num
if(player.location> 21){
    gameOver()
}
spots[player.location].appendChild(player.player)
}

function changeTurn(){
turn = (turn >= numPlayers - 1) ? 0 : turn +1
}

function rollDie() {
    roll.textContent = ''
    img.src = 'img/Dodecahedron3.gif'
    setTimeout(() => {
        const num = Math.ceil(Math.random() * 6)
        roll.textContent = num
        movePlayer(turn,num,getSpot())
        changeTurn()
    }, 1700)
}







die.addEventListener('click', e => {
    rollDie()
})