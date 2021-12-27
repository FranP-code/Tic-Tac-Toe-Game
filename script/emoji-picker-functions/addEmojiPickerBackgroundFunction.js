export default function addEmojiPickerBackgroundFunction() {

    const emojiPickerContainer = document.getElementsByClassName('emoji-picker-container')[0]
    
    emojiPickerContainer.addEventListener('click', () => {
        
        emojiPickerContainer.classList.add('hidden')
    })
}