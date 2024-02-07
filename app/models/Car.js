
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

}
