// 1.2
const car = {
    make: 'BMW',
    model: 'X5',
    color: 'Black',
    fuelType: 'Diesel',
    getCarInfo(){
        return this.make, this.model;
    },
    getFuelInfo(){
        return this.fuelType;
    }
  }


function getCarInfo(make, model){
    this.make = make;
    this.model = model;
}

getCarInfo.prototype = function(make, model){
    this.make = make;
    this.model = model;
}

const info = new getCarInfo(car.make, car.model);
console.log(info);

// 1.3
function getFuelInfo(fuelType){
    this.fuelType = fuelType;
}

getFuelInfo.prototype = function(fuelType){
    this.fuelType = fuelType;
}

const fuelStatus = new getFuelInfo(car.fuelType);
switch(fuelStatus.fuelType){
    case 'Diesel':
        console.log("Automobilis varomas dyzeliu");
        break;
    case 'Petrol':
        console.log("Automobilis varomas benzinu");
        break;
    case 'Electricity':
        console.log("Automobilis varomas elektra");
        break;
}