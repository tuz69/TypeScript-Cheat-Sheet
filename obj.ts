

type TypeUser = {
    name:string
    age:number

}

type TypeAddress = {
    city:string
    country:string
}


const user:TypeUser ={
    
    age: 17,
    name: 'Eduard'
}

const address:TypeAddress ={
    
    city: 'Kharkiv',
    country: 'Ukraine'
}

let common: TypeUser & TypeAddress

common = {
    ...user, 
    ...address
}

