function entity<T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>("Text")


const entity2 = <T>(args: T): T => {
    return args
}

entity2<number>(1)
entity2<string>("Text")

class Name<T>{
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

new Name<string>('MAX')
new Name<number>(1)



interface IPair<K, V> {
    key: K,
    value: V
}

const pair1: IPair<string, number> = {
    key: '1',
    value: 1,
}

const pair2: IPair<string, string> = {
    key: '1',
    value: "1",
}

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity) {
    return entity.length


}
getNameLength('Eduard')
getNameLength([1, 2, 3, 4, 5, 6])