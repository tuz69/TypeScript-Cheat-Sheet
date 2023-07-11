class Car {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
  // Работает вне class
  public getInfo(): string {
    return '${this.name} -  ${this.price} '
  }

  // // Работает только в class
  // private getInfoo():string{
  //     return '${this.name}  ${this.price} '
  // }

  // // Работает в class который extends от нашего class
  // protected getInfo():string{
  //     return '${this.name}  ${this.price} '
  // }
}

new Car('BMW', 1000).getInfo();
