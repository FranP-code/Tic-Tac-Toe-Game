export default function emojiPickerFunctionality() {

    const emojiPicker = document.querySelector('emoji-picker')
    
    emojiPicker.addEventListener('emoji-click', event => {
        
        const player = sessionStorage.getItem('actualPlayer')
        
        let input = document.getElementsByClassName(player)[0].children[1]
    
        if (player.includes('player-1')) {
    
            input = input.children[1]
        
        } else {
    
            input = input.children[0]
        }
        
        input.value = event.detail.unicode

        // const emojiPickerContainer = document.getElementsByClassName('emoji-picker-container')[0]
        // emojiPickerContainer.classList.add('hidden')

    })

    
}