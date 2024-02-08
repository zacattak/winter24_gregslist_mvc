export class Job {
    constructor(data) {
        this.title = data.title
        this.salary = data.salary
        this.location = data.location
        this.imgUrl = data.imgUrl
    }
    get JobCardHTMLTemplate() {
        return `<div class="col-12">
        <div class="rounded shadow-lg d-flex">
            <img class="w-25"
                src="${this.imgUrl}"
               
            <div class="">
                <h2>${this.title}</h2>
                <h2>${this.salary}</h2>
                <h2>${this.location}</h2>
            </div>
        </div>
    </div>`
    }



}