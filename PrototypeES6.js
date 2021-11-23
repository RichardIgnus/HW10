// 2 Užduotis
const car = {
    make: 'BMW',
    model: 'X5',
    color: 'Black',
    fuelType: 'Diesel'
  }

  // Car info constructor
  class carInfo{
      constructor(make, model){
          this.make = make;
          this.model = model;
      }
      getCarInfo(){
          return this.make, this.model;
      }
  }
  
  // Printing the car make and model
  const info = new carInfo(car.make, car.model);
  console.log(info);

// Fuel type constructor
class getFuel {
    constructor(fuelType){
        this.fuelType = fuelType;
    }
    getFuelType(){
        return this.fuelType;
    }
}
 
const fuelStatus = new getFuel(car.fuelType);

// Checking and printing FuelType
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