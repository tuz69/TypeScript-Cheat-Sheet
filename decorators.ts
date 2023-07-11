//Перед использование декораторов нужно добавить в tsconfig данную строчку:
//  "experimentalDecorators": true
//Иначе работать не будет


function LogClass(constructor: Function) {
    console.log(constructor.name)
}

function LogMethod(target: Object, key: string, description: PropertyDescriptor) {
    console.log(key)
}

@LogClass

class Plane {
    private id: number

    constructor(id: number) {
        this.id = id
    }

    @LogMethod
    getId() {
        return this.id
    }
}