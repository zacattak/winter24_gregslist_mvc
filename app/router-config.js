import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    view: /*html*/`
    <h1 class="m-4 display-3">Welcome to Gregslist!</h1>
    <h2 class="m-4 display-4">Please select a category from the top navbar!</h2>
    `
  },
  {
    path: '#/cars',
    view: 'app/views/CarsView.html'
  }
])