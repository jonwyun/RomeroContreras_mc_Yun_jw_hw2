class Dough {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }
}

class Topping {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }
}

class Donut {
    constructor(dough, topping) {
        this.dough = dough;
        this.topping = topping;
    }

    getDonutImage() {
        // Placeholder for donut image logic
        return `images/${this.dough.name}_${this.topping.name}.jpg`;
    }

    getDescription() {
        return `A delicious ${this.dough.name} donut with ${this.topping.name}.`;
    }
}

export { Dough, Topping, Donut };
