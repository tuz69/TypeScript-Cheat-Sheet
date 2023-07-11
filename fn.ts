type TypeNameReturn = {
    name:string
}

function getName(name:string):TypeNameReturn{
    return {name}
}


const getNames = (name:string):TypeNameReturn => {
    return {name}
}

type TypeNameFunction = (name:string) => TypeNameReturn

const getNamess: TypeNameReturn = name => {
    return {name}
}

const getNumbers = (...numbers:number[]) => {
    return numbers
}

//Перегрузки

function getCar(name:string):string
function getCar(name:string, price:number):string

function getCar(name:string, price?:number):string{
    return price ? 'Name: ${name}, Price^ ${price}' : 'Name: ${name}'
}

const car1 = getCar('Tesla')
const car2 = getCar('Tesla', 1000000)