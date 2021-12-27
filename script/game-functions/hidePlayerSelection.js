export default function hidePlayerSelection() {

    const playerSelection = document.getElementsByClassName('player-selection')[0]

    playerSelection.classList.add('animate__fadeOutDown')

    setTimeout(() => {

        playerSelection.classList.add('hidden')
    
    }, 1000)
}