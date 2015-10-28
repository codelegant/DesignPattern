function Car (model,year,miles) {
	this.model=model;
	this.year=year;
	this.miles=miles;
}
Car.prototype.toString=function(){
	return this.model+" has done "+this.miles+" miles";
}
var x6=new Car("BMW Z4",2009,50000),
	q7=new Car("Audi Q7",2015,200);
console.log(x6.toString());
console.log(q7.toString());