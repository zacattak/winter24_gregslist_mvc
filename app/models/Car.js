
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
          src="https://images.unsplash.com/photo-1625658281581-2da46feb5d1d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Picture of car">

        <div class="py-2 px-5">
          <h2>2000 Dodge Mustang</h2>
          <h2>$300000</h2>
          <h3>200000 Miles</h3>
          <h4>Listed on 12/12/2012</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis doloribus ea ipsa excepturi in
            dolor autem totam molestiae rem.</p>
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
