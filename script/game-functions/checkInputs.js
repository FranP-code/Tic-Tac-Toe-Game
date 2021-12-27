export default function checkInputs() {

    const player1 = document.getElementsByClassName('player player-1')[0]
    const player2 = document.getElementsByClassName('player player-2')[0]

    const inputsPlayer1 = [player1.children[0], player1.children[1].children[1]]
    const inputsPlayer2 = [player2.children[0], player2.children[1].children[0]]

    const inputsEmptys = []

    inputsPlayer1.forEach(input => {

        if (input.value === '') {

            inputsEmptys.push(' ' + input.className + ' (player 1)')
        }
    })

    inputsPlayer2.forEach(input => {

        if (input.value === '') {

            inputsEmptys.push(' ' + input.className + ' (player 2)')
        }
    })

    if (inputsEmptys.length) {

        alert('Please fill the inputs: ' + inputsEmptys)

        return true
    }

    if (inputsPlayer1[0].value === inputsPlayer2[0].value) {

        alert('Same usernames')

        return true
    }

    if (inputsPlayer1[1].value === inputsPlayer2[1].value) {

        alert('Same symbol')

        return true
    }

    return [inputsPlayer1, inputsPlayer2]
}