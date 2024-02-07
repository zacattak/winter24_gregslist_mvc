
export class Car {

  constructor (data) {
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
    this.listedAt = new Date()
  }

  // get makeAndModel() {
  //   return this.make + this.model
  // }

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
          <h4>Listed on 12/12/2012</h4>
          <p>${this.description}</p>
          <div class="d-flex">
            <p>Car Color:</p>
            <div class="ms-4 car-color-circle"></div>
          </div>
          <div class="fs-1">
            <i class="mdi mdi-engine-off" title="This car has a salvaged title"></i>
            <i class="mdi mdi-engine" title="This car does not have a salvaged title"></i>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
