import addEmojiPickerToButtons from './emoji-picker-functions/addEmojiPickerToButtons.js'
import addEmojiPickerBackgroundFunction from './emoji-picker-functions/addEmojiPickerBackgroundFunction.js'
import emojiPickerFunctionality from './emoji-picker-functions/emojiPickerFunctionality.js'
import addStartButtonFunctionality from './game-functions/addStartButtonFunctionality.js'
import checkInputs from './game-functions/checkInputs.js'
import disableEnterInputs from './emoji-picker-functions/disableEnterInputs.js'
import hidePlayerSelection from './game-functions/hidePlayerSelection.js'
import showTicTacToe from './game-functions/showTicTacToe.js'

function main(game) {

    addEmojiPickerToButtons()
    addEmojiPickerBackgroundFunction()
    emojiPickerFunctionality()

    disableEnterInputs()

    addStartButtonFunctionality(game)
}

function game() {

    if(checkInputs()) {

        return
    }
    
    hidePlayerSelection()
    showTicTacToe()
}

window.onload = () => main(game)