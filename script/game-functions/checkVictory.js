export default function checkVictory(combinations, boxes) {

    const boxesSorted = boxes.sort()
    
    const result = []

    combinations.forEach(combination => {
            
        if (boxes.includes(combination[0]) && boxes.includes(combination[1]) && boxes.includes(combination[2])) {

            console.log('WIN')
            result.push('WIN')
            result.push(combination)
        }
    });
    
    return result
}