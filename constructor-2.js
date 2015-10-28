function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
}
Car.prototype.toString = function() {
	return this.model + " has done " + this.miles + " miles";
}
var x6 = new Car("BMW Z4", 2009, 50000),
	q7 = new Car("Audi Q7", 2015, 200);
console.log(x6.toString());
console.log(q7.toString());

function Car_2(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
	this.toString = function() {
		return this.model + " has done " + this.miles + " miles";
	}
}

var sls = new Car_2("BEZ SLS", 2014, 100),
	cls = new Car_2("BEZ CLS", 2015, 1222);
console.log(sls.toString());
console.log(cls.toString());

var Car_extend=Object.create(Car());
var sls = new Car_extend("BEZ SLS", 2014, 100),
	cls = new Car_extend("BEZ CLS", 2015, 1222);
console.log(sls.toString());
console.log(cls.toString());