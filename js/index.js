function Diner(name){
    this.name = name;
    this.dishes = [];
    this.total = 0;
}

Diner.prototype.addDish = function(name,price){
    var dish = {
        name: name,
        price: price
    };
    this.dishes.push(dish);
}

Diner.prototype.calculateTotal = function(tax,tip){
    for (var i = 0; i < this.dishes.length; i++) {
        this.total += this.dishes[i].price;
    }
    this.total += (this.total * tip) + (this.total * tax);
    return this.total;
}

function Meal(){
    this.tax = 0.07;
    this.tip = 0.15;
    this.diners = [];
    this.total = 0;
}

Meal.prototype.addDiner = function(diner){
    this.diners.push(diner);
}

Meal.prototype.calculateTotal = function(){
    for (var i = 0; i < this.diners.length; i++) {
        this.total += this.diners[i].calculateTotal(this.tax, this.tip);
        console.log(this.diners[i].name, this.diners[i].total);
    }
    console.log('Meal Total:',this.total);
}


var tj = new Diner("TJ");
tj.addDish("spaghetti",9.99);
tj.addDish("garlic bread",0.99);

var sean = new Diner("Sean");
sean.addDish("house salad",4.99);

var aric = new Diner("Aric");
aric.addDish("cheeseburger", 10.99);
aric.addDish("mozzerella sticks", 7.99);

var meal = new Meal();
meal.addDiner(tj);
meal.addDiner(sean);
meal.addDiner(aric);

meal.calculateTotal();