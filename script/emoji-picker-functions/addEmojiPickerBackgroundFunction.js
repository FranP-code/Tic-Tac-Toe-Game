export default function addEmojiPickerBackgroundFunction() {

    const emojiPickerBackground = document.getElementsByClassName('emoji-picker-background')[0]
    const emojiPickerContainer = document.getElementsByClassName('emoji-picker-container')[0]

    emojiPickerBackground.addEventListener('click', () => {
        
        emojiPickerContainer.classList.add('hidden')
    })
}