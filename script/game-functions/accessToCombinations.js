export default function accessToCombinations() {
    
    function Combination(indexes) {

        indexes = indexes.map(index => `box-${index}`);

        return indexes
    }

    function HorizontalCombination(startIndex) {

        const x = startIndex

        const indexes = [x, x + 1, x + 2]

        return Combination(indexes)
    }

    function VerticalCombination(startIndex) {

        const x = startIndex
        
        const indexes = [x, x + 3, x + 6]

        return Combination(indexes)
    }

    function DiagonalCombination(startIndex) {

        const x = startIndex

        let indexes

        if (x === 1) {

           indexes = [x, 5, 9] 
        }

        if (x === 3) {

           indexes = [x, 5, 7]
        }

        return Combination(indexes)
    }

    const combinations = [

        HorizontalCombination(1),
        HorizontalCombination(4),
        HorizontalCombination(7),
        VerticalCombination(1),
        VerticalCombination(2),
        VerticalCombination(3),
        DiagonalCombination(1),
        DiagonalCombination(3)
    ]

    return combinations
}