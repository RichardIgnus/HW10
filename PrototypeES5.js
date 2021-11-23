// 1.2
function carOPP(make, model, color, fuelType){
    this.make = make;
    this.model = model;
    this.color = color;
    this.fuelType = fuelType;
}


carOPP.prototype.getCarInfo = function(){
    return {
        make: this.make,
        model: this.model
    }
}

const car = new carOPP('BMW', 'X5', 'Black','Diesel');

console.log(car.getCarInfo());

// 1.3


carOPP.prototype.fuelStatus = function (){;
    switch(this.fuelType){
        case 'Diesel':
            return "Automobilis varomas dyzeliu";
        case 'Petrol': 
            return "Automobilis varomas benzinu";
        case 'Electricity':
            return "Automobilis varomas elektra";
        default:
            return "Tokio kuro tipo nera"
    }
}

console.log(car.fuelStatus());