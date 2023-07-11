type TypeIsNymber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNymber<number>
type Type2 = TypeIsNymber<string>


type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'

type TypePrice = '$100000' | '$500000' | '$10000'

type TypeCar = `${TypeBrand} ${TypePrice}`

