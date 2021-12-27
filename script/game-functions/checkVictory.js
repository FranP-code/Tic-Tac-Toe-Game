export default function checkVictory(combinations, boxes) {

    combinations.forEach(combination => {

        const boxesSorted = boxes.sort()
            
        if (boxesSorted[0] === combination[0], boxesSorted[1] === combination[1], boxesSorted[2] === combination[2]) {

            alert('Win')
        }
    });
    
}