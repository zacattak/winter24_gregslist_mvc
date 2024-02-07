import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
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

  createCar() {
    try {
      event.preventDefault() //NOTE stop the page from refreshing
      console.log('creating car');

      const form = event.target

      console.log('targeted event', form);

      // @ts-ignore
      console.log('car make', form.make.value);

      const carFormData = getFormData(form)

      console.log('here is your car data object!', carFormData);

    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}