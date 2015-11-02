function Car(options) {
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}
function Truck(options) {
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue";
}
Truck.prototype=Car.prototype = {
	drive: function() {
		console.dir(this);
		console.log("prototype drive");
	},
	breakDown: function() {
		console.log("prototype drive");
	}
}

function VehicleFactory(argument) {
	// body...
}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options) {
	if (options.vehicleType === "car") {
		this.vehicleClass = Car;
	} else {
		this.vehicleClass = Truck;
	}
	return new this.vehicleClass(options);
}

/*var carFactory=new VehicleFactory();
var car=carFactory.createVehicle({
	vehicleType:"car",
	color:"yellow",
	doors:6
});

console.log(car instanceof(Car));
console.log(car);*/

/*抽象工厂*/
var AbstractVehicleFactory = (function() {
	var types = {};
	return {
		getVehicle: function(type, customizations) {
			var Vehicle = types[type];
			return (Vehicle) ? new Vehicle(customizations) : null;
		},
		registerVehicle: function(type, Vehicle) {
			var proto = Vehicle.prototype;
			if (proto.drive && proto.breakDown) {
				types[type] = Vehicle;
			}
			return AbstractVehicleFactory;
		}
	}
})();

AbstractVehicleFactory.registerVehicle("car", Car);
AbstractVehicleFactory.registerVehicle("truck", Truck);
var car = AbstractVehicleFactory.getVehicle("car", {
	color: "lime green",
	state: "like new"
})
var truck=AbstractVehicleFactory.getVehicle("truck",{
	wheelSize:"medium",
	color:"neon yellow"
});
car.drive();
// console.log(car);
// console.log(truck);