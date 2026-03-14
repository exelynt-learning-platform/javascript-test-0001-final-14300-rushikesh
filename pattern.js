function pattern(n) {
    const totalRows = 2 * n - 1;
    const middleRow = n - 1;

    // Outer loop: iterates through each row
    for (let i = 0; i < totalRows; i++) {
        let rowStr = "";

        // distance calculation
        let distFromCenter = Math.max(i - middleRow, middleRow - i);

        let leftStarCol = distFromCenter;
        let rightStarCol = 2 * middleRow - distFromCenter;

        // Inner loop: builds each row character by character
        for (let j = 0; j <= rightStarCol; j++) {
            if (j === leftStarCol || j === rightStarCol) {
                rowStr += "*";
            } else {
                rowStr += " ";
            }
        }

        console.log(rowStr);
    }
}

pattern(5);
