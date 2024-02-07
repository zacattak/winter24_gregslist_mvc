import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars

  let htmlString = ''

  cars.forEach(car => htmlString += car.CarCardHTMLTemplate)

  setHTML('carListings', htmlString)
}



export class CarsController {
  constructor () {
    console.log('Cars controller loaded');
    _drawCars()
  }
}