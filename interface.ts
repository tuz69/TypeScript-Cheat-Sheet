interface IUserAge {
    name: string;
    email: string;
}

interface IUser extends IUserAge {
    name: string;
    email: string;
}

type TypePerson = {
    age: number
}

type TypeUser = {
    name: string;
    email: string;
} & TypePerson


const user: TypeUser = {
    email: "nameemail@gmail.com",
    name: "Max",
    age: 27
};
