



let time = new Date()

let date = time.getDate()
let month = time.getMonth()
let year = time.getFullYear()


class Counter {
    #counterNumber = 0

    increment(){
        this.#counterNumber++
    }

    decrement(){
        this.#counterNumber--
    }


    getNumber(){
        return this.#counterNumber
    }
}

const counter = new Counter

export function getOrderNumber(){

    counter.increment()
    let counterNumber = String(counter.getNumber())
    counterNumber = counterNumber.padStart(4,"0")

    return `ORD-${date}-${month}-${year}-${counterNumber}`

    
}

getOrderNumber()