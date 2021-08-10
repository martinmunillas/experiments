class Example {
    constructor(number) {
        this.prop = number
    }

    get double() {
        return this.prop * 2
    }
}

const ex = new Example(3)

console.log(ex)

console.log(ex.double)

console.log({ ...ex, double: ex.double })