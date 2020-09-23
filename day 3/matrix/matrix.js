

// for (let r = 0; r < rows; r++) {
//     let row = []
//     for (let c = 0; c < columns; c++) {
//         row.push(counter++)
//     }
//     matrix.push(row)
// }

// console.log(matrix)

class Matrix {
    constructor(rows, columns) {
        this.matrix = this.generateMatrix(rows, columns)

    }

    // generateMatrix(rows, columns) {
    //     let matrix = []
    //     let counter = 1
    //     for (let r = 0; r < rows; r++) {
    //         let row = []
    //         for (let c = 0; c < columns; c++) {
    //             row.push(counter++)
    //         }
    //         matrix.push(row)
    //     }
    //     return matrix
    // }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    printAll() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                console.log(this.matrix[i][j])
            }
        }
    }
    getNum(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    printMatrix() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    alter(rowNum, colNum, newNum) {
        this.matrix[rowNum][colNum] = newNum
    }

}

// const m1 = new Matrix(5, 2)
// console.log(m1.matrix)
const m2 = new Matrix(3, 4)
// console.log(m2.matrix) 
// m2.printMatrix()
// m2.printColumn(1) //prints 2, 6, 10 on separate lines
// m2.printRow(1) // it should print 5, 6, 7, 8.
m2.alter(1, 3, 174) // would change the 8 to 174
m2.printMatrix()