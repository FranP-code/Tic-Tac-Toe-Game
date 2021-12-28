export default function checkVictory(combinations, boxes, globalBoxesMarked) {

    const result = []

    combinations.forEach(combination => {
            
        if (boxes.includes(combination[0]) && boxes.includes(combination[1]) && boxes.includes(combination[2])) {

            console.log('WIN')
            result.push('WIN')
            result.push(combination)
            
        }
        
    });
        console.log(globalBoxesMarked.length)
        
        if (globalBoxesMarked.length === 9 && result.length === 0) {
            
            result.push('TIE')
        }
    
    return result
}