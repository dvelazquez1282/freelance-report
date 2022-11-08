# FreelanceReport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Roadmap
[x] - Install JSON server
[~] - Add lazy module for Time
    [x] - Add mockup data for Time entity
    [x] - Add Time entity module
    [x] - Add page for Time entity
    [x] - Add route for Time entity Page    
    [~] - Add table for Time entity
    [] - Add creation form for Time entity
    [] - Add edition form for Time entity
    [] - Add delete action for Time entity
    [] - Add filter by client for Time entity table
    [] - Inject the Time api routes from the module in the main module route helper
[~] - Final table library
    [x] - Add the first version of final table component with columns and rows based in a config
[~] - Final form libray
    [x] - Initialize the library
[] - Authentication
    [] - Login page
    [] - Login guard
    [] - Token and user data management
[] - Others
    [x] - Integrate bootstrap
    [] - Integrate bootstrap icon
    [] - Integrate a loading bar pluging
    [] - Integrate a notification pluging
    [] - Integrate translator plugin



## Help Commands
- json-server --watch mock-data/db.json --routes mock-data/routes.json -m ./node_modules/json-server-auth
- ng generate component timing/pages/timming --module=timing
- ng generate class timing/models/timing --type=model
- ng generate service services/timing
- ng generate library ngx-final-table
- ng build ngx-final-table --watch