interface ICar {
    id: number,
    name: string,
    price: number,
    yearBuilt: number
}

//Исключает поля
interface ICarCreate extends Omit<ICar, 'id'> { }

//Вытаскивать только одно какое-то поле. В нашем случае id
interface ICarId extends Pick<ICar, 'id'> { }

//Делает все свойства не обязательными
interface IOptionalCar extends Partial<ICar> { }

//Делает все полян только для чтения
interface IReadonlyCar extends Readonly<ICar> { }

//Создание своего нового типа.
//В нашем случае делает name и price типа string либо number
type TypeCarRecord = Record<'name' | 'price', string | number>

//Делает поля обязательными 
interface IRequiredCar extends Required<ICar> { }

//Return Type
// type TypeGetName = () => string
// type Return = ReturnType<TypeGetName>

//Extract вернёт только совпадения, в нашем случае - это andrey
type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'>


//Exclude исключает по первому параметру, в нашем случае будет только max
type Any2 = Exclude<'max' | 'andrey', 'andrey' | 'misha'>


//Убирает все null и undefine из типов
type NotNull = NonNullable<string | number | undefined | null>





// const car: TypeCarRecord = {}