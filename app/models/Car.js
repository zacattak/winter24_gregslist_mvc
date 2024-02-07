import { generateId } from "../utils/GenerateId.js"

export class Car {

  constructor(data) {
    this.id = generateId()
    this.make = data.make
    this.model = data.model
    this.mileage = data.mileage
    this.year = data.year
    this.color = data.color
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.hasSalvagedTitle = data.hasSalvagedTitle
    // NOTE creates a new date object with the current date and time if no argument is passed to the date constructor
    // NOTE this date object has methods attached to it to format the date in various ways
    this.listedAt = new Date()
  }



  get CarCardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="bg-light rounded shadow-lg d-block d-md-flex">
        <img class="car-img rounded-start"
          src="${this.imgUrl}"
          alt="Picture of ${this.make} ${this.model}">

        <div class="py-2 px-5">
          <h2>${this.year} ${this.make} ${this.model}</h2>
          
          <h2>$${this.price}</h2>
          <h3>${this.mileage} Miles</h3>
          <h4>Listed on ${this.ListedAtDate}</h4>
          <h4>At ${this.ListedAtTime}</h4>
          <p>${this.description}</p>
          <div class="d-flex">
            <p>Car Color:</p>
            <div class="ms-4 car-color-circle" style="background-color: ${this.color};"></div>
          </div>
          <div class="fs-1">
            ${this.SalvagedTitleIcon}
          </div>
          <div>
            <button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger">Delete Car</button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get ListedAtTime() {
    // NOTE 11:35:11 AM
    return this.listedAt.toLocaleTimeString()
  }
  get ListedAtDate() {
    // NOTE 2/7/2024
    return this.listedAt.toLocaleDateString()
  }

  get SalvagedTitleIcon() {
    // NOTE look at the boolean value on this class and return the correct icon
    if (this.hasSalvagedTitle) {
      return '<i class="mdi mdi-engine-off" title="This car has a salvaged title"></i>'
    }

    // else
    return '<i class="mdi mdi-engine" title="This car does not have a salvaged title"></i>'
  }
}
