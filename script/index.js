import addEmojiPickerToButtons from './emoji-picker-functions/addEmojiPickerToButtons.js'
import addEmojiPickerBackgroundFunction from './emoji-picker-functions/addEmojiPickerBackgroundFunction.js'
import emojiPickerFunctionality from './emoji-picker-functions/emojiPickerFunctionality.js'

function main() {

    addEmojiPickerToButtons()
    addEmojiPickerBackgroundFunction()
    emojiPickerFunctionality()
}

window.onload = () => main()