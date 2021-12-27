export default function addEmojiPickerToButtons() {
           
    let buttons = document.querySelectorAll('.player .symbol-container button')
        buttons = [...buttons]
    
    const emojiPickerContainer = document.getElementsByClassName('emoji-picker-container')[0]

    buttons.forEach(button => {

        button.addEventListener('click', (event) => {

            event.preventDefault()
            
            const player = button.parentElement.parentElement.className

            sessionStorage.setItem('actualPlayer', player)

            if (emojiPickerContainer.classList.contains('hidden')) {
                emojiPickerContainer.classList.remove('hidden')
                
                return
            }

        })
    })
}