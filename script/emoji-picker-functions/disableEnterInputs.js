export default function disableEnterInputs() {

    const player1 = document.getElementsByClassName('player player-1')[0]
    const player2 = document.getElementsByClassName('player player-2')[0]

    const inputsPlayer1 = [player1.children[0], player1.children[1].children[1]]
    const inputsPlayer2 = [player2.children[0], player2.children[1].children[0]]

    const inputsPlayers = [inputsPlayer1, inputsPlayer2]

    inputsPlayers.forEach(inputsArray => {

        inputsArray.forEach(input => {

            input.addEventListener('keypress', e => {

                if (e.keyCode === 13 || e.which === 13) {

                    e.preventDefault()
                    return false
                }
            })
        })

    })

}