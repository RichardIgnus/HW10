// 2 Užduotis

  // Car info constructor
  class carInfo{
      constructor(make, model, color, fuelType){
          this.make = make;
          this.model = model;
          this.color = color;
          this.fuelType = fuelType;
      }
      getCarInfo(){
          return {
              make: this.make,
              model: this.model,
          }
      }
      getFuelType(){
        switch(this.fuelType){
            case 'Diesel':
                return "Automobilis varomas dyzeliu";
            case 'Petrol': 
                return "Automobilis varomas benzinu";
            case 'Electricity':
                return "Automobilis varomas elektra";
            default:
                return "Tokio kuro tipo nera";
        }
      }
  }
  

const car = new carInfo('BMW', 'X5', 'Black','Diesel');
console.log(car.getCarInfo());
console.log(car.getFuelType());