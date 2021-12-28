import accessToCombinations from "./accessToCombinations.js"
import checkVictory from "./checkVictory.js"
import tieActions from "./tieActions.js"
import victoryActions from "./victoryActions.js"

export default function gameLogic(checkInputsResult, replay) {

    function Player(position) {

        console.log(replay)
        console.log(checkInputsResult)

        if (replay) {
         
            this.name = checkInputsResult[position].name 
            this.symbol = checkInputsResult[position].symbol 
        
        } else {

            this.name = checkInputsResult[position][0].value 
            this.symbol = checkInputsResult[position][1].value 
        } 

        this.markedBoxes = []
    }

    const player1 = new Player(0)
    const player2 = new Player(1)
    const players = [player1, player2]

    const combinations = accessToCombinations()

    let actualPlayer = players[0]
    let boxesMarked = []

    let playersTurnMessage = document.getElementById("players-turn-name-place")
        playersTurnMessage.innerText = actualPlayer.name
    
    const boxes = [...document.getElementsByClassName('box')]

    boxes.forEach(box => {

        box.addEventListener('click', () => {

            if (boxesMarked.includes(box.id)) {

                return
            }

            box.innerText = actualPlayer.symbol
            boxesMarked.push(box.id)

            actualPlayer.markedBoxes.push(box.id)

            const checkVictoryResult = checkVictory(combinations, actualPlayer.markedBoxes, boxesMarked)
            
            const data = {

                player1: player1,
                player2: player2,
            } 

            if (checkVictoryResult[0] === 'WIN') {

                victoryActions(checkVictoryResult[1], actualPlayer.name, data)
            }

            if (checkVictoryResult[0] === 'TIE') {

                tieActions(data)
            }

            if (players.indexOf(actualPlayer) === 0) {

                actualPlayer = players[1]
            
            } else {

                actualPlayer = players[0]

            } 

            playersTurnMessage.innerText = actualPlayer.name
        })
    })
}