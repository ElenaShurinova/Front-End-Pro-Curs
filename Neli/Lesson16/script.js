// Экземпляр класса - объект, созданный с помощью класса
// Свойства
// Методы 

// Класс - Млекопитающие
// Экземпляр класса - Корова
// Свойства - вид, вес, размер, цвет, возраст и тд
// Методы - ходить, давать молоко, спать
// this - контекст, ссылка на объект, с которым происходит действие



// ПРАКТИКА 1

// 1. Реализовать класс Car со свойствами brand, model, color, production_year, isNew, volume
// 2. Реализовать метод getProductionYear(). При вызове метода в консоль выводится сообщение в формате "Production year is <YEAR>"
// 2. Реализовать метод getIncreasedProductionYear(), который принимает число. При вызове метода в консоль выводится сообщение в формате "Production year is <YEAR + число>"
// 3. Реализовать метод getInfo(). При вызове метода выводится инфо о машине в формате "Car: <BRAND> <MODEL>, year: <YEAR>, color: <COLOR>, volume: <VOLUME>"

class Car {

    static carsCounter = {};

    constructor(brand, model, color, production_year, isNew, volume){
        this.brand = brand,
        this.model = model,
        this.color = color,
        this.year = production_year,
        this.isNew = isNew,
        this.volume = volume

        if (Car.carsCounter[brand]) {
            Car.carsCounter[brand]++
        } else {
            Car.carsCounter[brand] = 1
        }
    }

    // '...' - true
    // undefined - false

    

    getProductionYear(){
        console.log(`Production year is ${this.year}`)
    }

    getIncreasedProductionYear(num){
        console.log(`Production year is ${this.year + num}`)
    }

    static dropProduct(){

    } 

}

const car_1 = new Car('Toyota', 'RAV4', 'white', 2020, false, 3.5);
const car_2 = new Car('Suzuki', 'Grant Vitara', 'gold', 2024, true, 3.0);
const car_3 = new Car('Honda', 'Honda1', 'red', 2008, false, 3.0);
const car_4 = new Car('Honda', 'Honda', 'blue', 2021, false, 3.0);
const car_5 = new Car('Toyota', 'Land C', 'black', 2021, false, 3.0);
const car_6 = new Car('Audi', 'A4', 'red', 2023, false, 3.0);

// car_1.getProductionYear(); // "Production year is 2020"
// car_2.getProductionYear(); // "Production year is 2024"

// car_1.getIncreasedProductionYear(10); // "Production year is 2030"
// car_1.getIncreasedProductionYear(7); // "Production year is 2027"
// car_2.getIncreasedProductionYear(10); // "Production year is 2034"

// {
//     Toyota: 2,
//     Suzuki: 1,
//     Honda: 2,
//     Audi: 1
// }

// console.log(car_1);
// console.log(car_2);
// console.log(Car.carsCounter);

Car.dropProduct()
