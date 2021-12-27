export default function showTicTacToe() {

    const game = document.getElementsByClassName('game')[0]

    setTimeout(() => {
        
        game.classList.remove('hidden')
        game.classList.add('animate__fadeInDown')

    }, 1000);
}