// exercise 1

class UniqueArray {

    constructor() {
        this.uniqueArr = []
        this.arrayLength = 0
        this.data = {}
    }

    add(item) {
        if (!this.data[item]) {
            this.data[item] = item
            this.uniqueArr[this.arrayLength] = item
            this.arrayLength++
        }
    }
    showAll() {
        console.log(this.uniqueArr)
    }
    exists(item) {
        if (this.data[item]) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    get(index) {
        if (this.uniqueArr[index]) {
            const item = this.uniqueArr[index]
            return item
        }
        else {
            return -1
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

