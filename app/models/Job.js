export class Job {
    constructor(data) {
        this.title = data.title
        this.salary = data.salary
        this.location = data.location
    }
    get JobCardHTMLTemplate() {
        return `<div class="col-12">
        <div class="rounded shadow-lg d-flex">
            <img class="w-25"
                src="https://unsplash.com/photos/security-guard-standing-on-the-gray-floor-8FxJi5wuwKc"
                alt="bodyguard">
            <div class="">
                <h2>Bodyguard</h2>
                <h2>100000</h2>
                <h2>California</h2>
            </div>
        </div>
    </div>`
    }



}