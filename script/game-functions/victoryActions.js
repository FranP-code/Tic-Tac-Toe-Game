export default function victoryActions(combination, playerName) {

    const stylesActions = (() => {

        let victoryMessage = document.getElementsByClassName('victory-message')[0]
            victoryMessage.classList.remove('hidden')
            victoryMessage.classList.add('animate__fadeInDown')

        let victoryBackground = document.getElementsByClassName('background-winner-div')[0]
            victoryBackground.classList.add('show')

        let victoryName = document.getElementById('victory-name')
            victoryName.innerText = playerName

        let game = document.getElementsByClassName('tic-tac-toe')[0]
            game.classList.add('completed')

        combination.forEach(element => {
            
            const box = document.getElementById(element)
            
            box.classList.add('winner-box')

            setTimeout(() => {
                
                box.classList.add('black-letters')

            }, 350);
        });
    })()

    const button = document.getElementById('play-again-button')

    button.addEventListener('click', (e) => {

        e.preventDefault()

        const game = document.getElementsByClassName('game')[0]
        
        game.classList.add('animate__fadeOutDown')

        setTimeout(() => {

            game.classList.add('hidden')
        
        }, 1000)
    })
}