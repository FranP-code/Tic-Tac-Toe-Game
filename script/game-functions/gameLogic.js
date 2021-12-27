import accessToCombinations from "./accessToCombinations.js"
import checkVictory from "./checkVictory.js"

export default function gameLogic(checkInputsResult) {

    function Player(position) {

        this.name = checkInputsResult[position][0].value
        this.symbol = checkInputsResult[position][1].value
        this.markedBoxes = []
    }

    const player1 = new Player(0)
    const player2 = new Player(1)
    const players = [player1, player2]

    const combinations = accessToCombinations()

    let actualPlayer = players[0]
    let boxesMarked = []
    
    const boxes = [...document.getElementsByClassName('box')]

    boxes.forEach(box => {

        box.addEventListener('click', () => {

            if (boxesMarked.includes(box.id)) {

                return
            }

            box.innerText = actualPlayer.symbol
            boxesMarked.push(box.id)

            actualPlayer.markedBoxes.push(box.id)

            checkVictory(combinations, actualPlayer.markedBoxes)

            if (players.indexOf(actualPlayer) === 0) {

                actualPlayer = players[1]
            
            } else {

                actualPlayer = players[0]

            } 

        })
    })
}