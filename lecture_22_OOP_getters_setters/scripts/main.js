// 1. Реализуем класс `CoffeeRecipe`, который хранит в себе данные о рецепте 
// кофе (то есть о соотношении ингредиентов). В конструкторе, он принимает 
// название рецепта, и пропорции ингредиентов - от 1 до 3 чисел. Первое - 
// это доля воды `waterFraction`, второе - доля зерен `beansFraction`, и 
// третье - доля молока `milkFraction` . Нужно реализовать в конструкторе 
// контроль того, что соотношение пропорций в сумме равно 1 (т.е доля воды + 
//     доля зерен + доля молока = 1).

class CoffeeRecipe {

    constructor(name, water, beans, milk) {
      if (water + beans + milk !== 1) {
        throw new Error('Invalid proportions!');
      }
      this.recipeName = name;
      this.waterFraction = water;
      this.milkFraction = milk;
      this.beansFraction = beans;
    }
    get description() {
        return `Recipe ${this.recipeName}: water: ${this.waterFraction}, beans: ${this.beansFraction}, milk: ${this.milkFraction}`;
      }
      set proportions( [water, beans, milk] ) {
        const total = water + beans + milk;
        if (total === 1) {
          this.waterFraction = water;
          this.beansFraction = beans;
          this.milkFraction = milk;
        }
      }

  }

 // Пример использования:
const cappuccino = new CoffeeRecipe('Cappuccino', 0.4, 0.4, 0.2);
console.log(cappuccino.description); 

class CoffeeMachine {
    constructor(model, waterLimit, beansLimit, milkLimit) {
      this.model = model;
      this.waterLimit = waterLimit;
      this.beansLimit = beansLimit;
      this.milkLimit = milkLimit;

      this._water = 0;
      this._beans = 0;
      this._milk = 0;

      
  
    
    }
}

class CoffeeMachine {

    
    
      set waterStorage(value) {
        this.water += value;
        if (this.water > this.waterLimit) {
          this.water = this.waterLimit;
          console.log('превышен объем отсеков');
        }
      }
    
      set beansStorage(value) {
        this.beans += value;
        if (this.beans > this.beansLimit) {
          this.beans = this.beansLimit;
          console.log('превышен объем отсеков');
        }
      }
    
      set milkStorage(value) {
        this.milk += value;
        if (this.milk > this.milkLimit) {
          this.milk = this.milkLimit;
          console.log('превышен объем отсеков');
        }
      } 

      if (this.water >= requiredWater) {
        console.log('Недостаточно воды для приготовления кофе');
        
      }
      if (this.beans >= requiredBeans) {
        console.log('Недостаточно зерен для приготовления кофе');
       
      }
      if (this.milk >= requiredMilk) {
        console.log('Недостаточно молока для приготовления кофе');
       
      }

      ////////////////////////////////////////////////////////////////////////////////////////
      this.water -= requiredWater;
      this.beans -= requiredBeans;
      this.milk -= requiredMilk;

    static recipes = [
      new CoffeeRecipe('espresso', 0.6, 0.4, 0),
      new CoffeeRecipe('americano', 0.8, 0.2, 0),
      new CoffeeRecipe('latte', 0.4, 0.2, 0.4),
      new CoffeeRecipe('cappuccino', 0.3, 0.2, 0.5)
    ];
    console.log(`${coffeeName} готов!`);
return { drink: coffeeName };


addCoin(coin) {
    if (CoffeeMachine.coinDenominations.includes(coin)) {
      this.totalAmount += coin;
      console.log(`Добавлено ${coin} монет. Текущая сумма: ${this.totalAmount}`);
    } else {
      console.log(`Монета номиналом ${coin} не распознана.`);
    }
  }

}








