export default function tieActions(data) {

    const stylesActions = (() => {

        let victoryMessage = document.getElementsByClassName('victory-message')[0]
            victoryMessage.classList.remove('hidden')
            victoryMessage.classList.add('animate__fadeInDown')
        
        let victoryMessageText = victoryMessage.children[0]
            victoryMessageText.innerText = 'Tie!'

        let victoryBackground = document.getElementsByClassName('background-winner-div')[0]
            victoryBackground.classList.add('show')

        let game = document.getElementsByClassName('tic-tac-toe')[0]
            game.classList.add('completed')
    })()

    const button = document.getElementById('play-again-button')

    button.addEventListener('click', (e) => {

        e.preventDefault()

        const game = document.getElementsByClassName('game')[0]
        
        game.classList.add('animate__fadeOutDown')

        console.log(data)

        setTimeout(() => {

            game.classList.add('hidden')
            
            localStorage.setItem('data', JSON.stringify(data))

            location.reload();

        }, 1000)
    })
}