# GrizzlyHacks

### Fall 2024 Team
* **Kenny Amador** :construction_worker:
  * Data modeler
  * Client Liaison

  
### Team
* **Josh Beers** :crown:
  * Lead Programmer
  * Project Manager
* **Danielle Battle** :art:
  * UX/UI 
  * Document Lead
* **Anne Joseph** :bar_chart:
  * Data Modeler
  * Testing Lead

[Repo Link](https://github.com/GGC-SD/GrizzlyHacks)

## Introduction
Grizzly Hacks is a newly created student organization at Georgia Gwinnett College that is responsible for organizing and hosting hackathons on campus. The organization is currently run by hackathon enthusiast who want to bring the fun and excitement of hackathons to their home campus. <br /><br />
The Grizzly Hacks web application allows users to access information about hackathons that the RSO will be hosting on campus. The application also allows users to register and apply for an upcoming hackathon. The web application gives administration an easy way to update the event calendar on the landing page and audit accounts and applications without database knowledge. The technology used to create this web application are node, angular, bootstrap, html/css, and firebase

## Installation
Use the following commands to install Angular, creating a new project, and serving it. <br /><br />

1. clone the repo
    ```
    git clone https://github.com/GGC-SD/GrizzlyHacks
    ```
1. change directory
    ```
    cd GrizzlyHacks/WebPage/GGCHacks
    ```
1. install the repo with npm
    ```
    npm install
    ```
1. install the Angular command-line tool
    ```
    npm install -g @angular/cli
    ```
1. create file `environments/environment.ts` with the following content and replace the `...` section with the correct Firebase keys.
```
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    ...
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
```
1. serve the project
```
ng serve
```
1. After these steps, go to http://localhost:4200 in your browser.<br />Below is a screenshot od the home page of the website.Only the admins will be able to see the Admin Dashboard.<br /><br />
 
 ![](Documentation/WebPage.png)<br /><br />
 
 ## Feature List
 
 * Real-time Application
 * About
 * Registration
 * Dynamic Calendar
 * Sponsors
 * FAQs
 * Contact
 * Admin backend
 
 All the features are demonstrated in this [video](https://www.youtube.com/watch?v=1dRrcsm5qKo).
 You can also view our website by clicking on this [link](https://grizzly-hacks.web.app).
 
