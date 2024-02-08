import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawJobs() {
    const jobs = AppState.jobs
    let htmlString = ''
    jobs.forEach(job => htmlString += job.JobCardHTMLTemplate)

    setHTML('jobListings', htmlString)
}


export class JobsController {
    constructor() {
        console.log('Jobs controller loaded');
    }
}