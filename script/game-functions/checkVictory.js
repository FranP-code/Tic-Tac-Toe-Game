export default function checkVictory(combinations, boxes) {

    const boxesSorted = boxes.sort()

    combinations.forEach(combination => {
            
        if (boxesSorted[0] === combination[0] && boxesSorted[1] === combination[1] && boxesSorted[2] === combination[2]) {

            alert('Win')
        }
    });
    
}