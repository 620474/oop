class Food {
    constructor(food) {
        this.food = food;
    }

    getPrice() {
        return this.food.price;
    }

    getCalories() {
        return this.food.calories;
    }
}


class Hamburger extends Food {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    }
    static SIZE_LARGE = {
        price: 100,
        calories: 40
    }
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }

    constructor(props, stuff) {
        super(props);
        if (!stuff) console.log("Add one stuff");
        this.stuff = stuff;
    }

    getStuffing() {
        return this.stuff
    }

    calculatePrice() {
        return this.getPrice() + this.stuff.price;
    }

    calculateCalories() {
        return this.getCalories() + this.stuff.calories;
    }
}


class Salad extends Food {
    static Cesar = {
        price: 100,
        calories: 20
    }
    static Olivie = {
        price: 50,
        calories: 80
    }

    constructor(props, weight) {
        super(props);
        this.weight = Number(weight);
    }

    calculatePrice() {
        return (this.getPrice() * this.weight) / 100;
    }

    calculateCalories() {
        return (this.getCalories() * this.weight) / 100;
    }

}


class Drink extends Food {
    static Cola = {
        price: 50,
        calories: 40
    }
    static Coffee = {
        price: 80,
        calories: 20
    }

    constructor(props) {
        super(props);
    }

    calculatePrice() {
        return this.getPrice()
    }

    calculateCalories() {
        return this.getCalories()
    }
}


class Order {
    constructor() {
        this.order = [];
        this.paid = false;
    }

    addFood(props, quantity = 1) {
        if (!this.paid) {
            for (let i = 0; i < quantity; i++) {
                this.order.push(props)
            }
            return this;
        } else {
            console.log('You have already paid for the order');
        }
    }

    deleteFood(index) {
        if (!this.paid) {
            this.order = this.order.filter((prop, i) => i !== index)
            return this;
        } else {
            console.log('You have already paid for the order')
        }
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let i = 0; i < this.order.length; i++) {
            totalPrice += this.order[i].calculatePrice()
        }
        return totalPrice;
    }

    getTotalCalories() {
        let totalCalories = 0
        for (let i = 0; i < this.order.length; i++) {
            totalCalories += this.order[i].calculateCalories()
        }
        return totalCalories;
    }

    pay() {
        this.paid = true;
    }
}

const firstOrder = new Order()
firstOrder.addFood(new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE), 2).addFood(new Salad(Salad.Cesar,150),2)
console.log(firstOrder.getTotalCalories())
console.log(firstOrder.getTotalPrice())
firstOrder.deleteFood(2)
console.log(firstOrder.getTotalPrice())
firstOrder.pay()
firstOrder.addFood(new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE))



