import addEmojiPickerToButtons from './emoji-picker-functions/addEmojiPickerToButtons.js'
import addEmojiPickerBackgroundFunction from './emoji-picker-functions/addEmojiPickerBackgroundFunction.js'
import emojiPickerFunctionality from './emoji-picker-functions/emojiPickerFunctionality.js'
import addStartButtonFunctionality from './game-functions/addStartButtonFunctionality.js'
import checkInputs from './game-functions/checkInputs.js'
import disableEnterInputs from './emoji-picker-functions/disableEnterInputs.js'
import hidePlayerSelection from './game-functions/hidePlayerSelection.js'
import showTicTacToe from './game-functions/showTicTacToe.js'
import gameLogic from './game-functions/gameLogic.js'

function main(game) {

    addEmojiPickerToButtons()
    addEmojiPickerBackgroundFunction()
    emojiPickerFunctionality()

    disableEnterInputs(game)

    addStartButtonFunctionality(game)

    const data = localStorage.getItem('tic-tac-toe-data')

    if (typeof(data) === 'string') {
        
        const checkInputsResult = Object.values(JSON.parse(data))
        
        localStorage.removeItem('tic-tac-toe-data')

        game(checkInputsResult, true)
    }
}

function game(checkInputsResult, replay) {

    if (!checkInputsResult) {

        checkInputsResult = checkInputs()
    }

    if (!replay) {

        replay = false
    }
    
    console.log(checkInputsResult)
    
    if(checkInputsResult && typeof(checkInputsResult) === 'boolean') {

        return
    }
    
    hidePlayerSelection()
    showTicTacToe()

    gameLogic(checkInputsResult, replay)
}

window.onload = () => main(game)