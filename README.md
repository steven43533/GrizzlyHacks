# Grizzly Hacks

<br></br>

## Description

The Grizzly Hacks client, which is a RSO of people who are interested in Hackathons, has tasked the team to work on their previous website, update it with modern features, and to add new components that will allow the clients and future users to access a website that will easily portray news, host events, and provide information about previous Hackathons. The website should have different authentication levels that allow admins to easily edit and add new information onto the website, while users to gain access to features so they can join feature Hackathons and post submissions for current events.

<br></br>

## Links

- [Deployed Project]
- [Project Documentation]

<br></br>

## Technologies

- Node.js
- Angular
- Bootstrap
- HTML/CSS
- Firebase
- TypeScript

<br></br>

## Working Features

- Real-time Application
- Social Media Links
- Registration System
- Event and Blog Post System
- Sponsors Section
- FAQs
- Mobile Device Friendly

<br></br>

## Installation Steps

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

1. After these steps, go to http://localhost:4200 in your browser.<br />Below is a screenshot of the home page of the website.Only the admins will be able to see the Admin Dashboard.<br /><br />

![](Documentation/docs-Fall2024/LandingPage.png)<br /><br />

<br></br>

## HoneyPot - Spring 2025 :paintbrush:

- **William Randazzo**

  - _UI/UX_
  - Client Liaison

- **Steven Lopez**

  - Code Architecture/Lead Programmer
  - Project Manager

- **Derron Pierre**
  - _Data modeler_
  - _Documentation Lead_

## Website Wizards - Fall 2024

- **Kenny Amador** :construction_worker:

  - Data modeler
  - Client Liaison

- **_Destiny Lowe_** :paintbrush:

  - _UI/UX Specialist_
  - _Documentation Lead_

- **Jimmy Phan** :computer:

  - _Lead Programmer/Code Architecture_
  - _Testing Lead_

- **Daniel Santoyo** :computer:
  - _Project Manager_
  - _Programmer/Code Architecture_

## Original Contributors

- **Josh Beers** :crown:
  - Lead Programmer
  - Project Manager
- **Danielle Battle** :art:
  - UX/UI
  - Document Lead
- **Anne Joseph** :bar_chart:
  - Data Modeler
  - Testing Lead

<br></br>

## Project Flyer and Video

**OUTDATED** All the features are demonstrated in this [video](https://www.youtube.com/watch?v=1dRrcsm5qKo).<br /><br />
**UPDATED Website Demo as of Nov 21/2024**
link to the [video](https://www.youtube.com/watch?v=DUOhE-9DSAE)

![](Documentation/docs-Fall2024/GrizzlyHacksFlyer.png)

You can also view our website by clicking on this [link](https://grizzly-hacks.web.app).

<br></br>

## Repo Link

[Repo Link](https://github.com/GGC-SD/GrizzlyHacks)

## Troubleshooting Common Issues

### 1. Node.js and npm/yarn are not installed or are outdated

- **Issue**: Angular requires Node.js and a package manager (npm or yarn) to be installed.
- **Steps**:
  1. Check if Node.js and npm are installed:
     ```bash
     node -v
     npm -v
     ```
  2. If not installed, download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/).
  3. Update npm to the latest version:
     ```bash
     npm install -g npm
     ```
  4. If using yarn, install it globally:
     ```bash
     npm install -g yarn
     ```

---

### 2. Angular CLI is not installed

- **Issue**: The `ng` command is not recognized.
- **Steps**:
  1. Install Angular CLI globally:
     ```bash
     npm install -g @angular/cli
     ```
  2. Verify the installation:
     ```bash
     ng version
     ```
  3. If the command is still not recognized, ensure your system's `PATH` includes the npm global binaries directory.

---

### 3. Dependency installation fails

- **Issue**: Errors during `npm install` or `yarn install`.
- **Steps**:
  1. Delete the `node_modules` folder and `package-lock.json` (or `yarn.lock`):
     ```bash
     rm -rf node_modules package-lock.json yarn.lock
     ```
  2. Clear the npm cache:
     ```bash
     npm cache clean --force
     ```
  3. Reinstall dependencies:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn install
     ```
  4. If the issue persists, check for version conflicts in `package.json` and ensure all dependencies are compatible with your Angular version.

---

### 4. Port is already in use

- **Issue**: The default port (4200) is occupied.
- **Steps**:
  1. Identify the process using the port:
     ```bash
     sudo lsof -i :4200
     ```
  2. Kill the process:
     ```bash
     kill <PID>
     ```
  3. Alternatively, run the Angular project on a different port:
     ```bash
     ng serve --port 4201
     ```

---

### 5. TypeScript or Angular version mismatch

- **Issue**: Errors related to TypeScript or Angular versions.
- **Steps**:
  1. Check the Angular and TypeScript versions in `package.json`.
  2. Ensure the versions are compatible (refer to the [Angular compatibility guide](https://angular.io/guide/versions)).
  3. Update Angular CLI and project dependencies:
     ```bash
     ng update @angular/cli @angular/core
     ```
  4. Update TypeScript:
     ```bash
     npm install typescript@latest --save-dev
     ```

---

### 6. Environment configuration issues

- **Issue**: Errors related to environment variables or configuration files.
- **Steps**:
  1. Check the `src/environments/` folder for `environment.ts` and `environment.prod.ts`.
  2. Ensure the correct environment file is being used (e.g., `ng serve` uses `environment.ts` by default).
  3. If using custom environment variables, ensure they are defined and referenced correctly.

---

### 7. Build errors

- **Issue**: Errors during `ng build`.
- **Steps**:
  1. Check the error message for specific issues (e.g., missing modules, syntax errors).
  2. Ensure all dependencies are installed and up-to-date.
  3. Clean the build cache:
     ```bash
     ng build --prod --output-hashing=none
     ```
  4. If using lazy loading, ensure the module paths are correct.

---

### 8. Proxy configuration issues

- **Issue**: API requests fail due to incorrect proxy configuration.
- **Steps**:
  1. Check the `proxy.conf.json` file (if used) for correct API endpoints.
  2. Update the `angular.json` file to include the proxy configuration:
     ```json
     "serve": {
       "options": {
         "proxyConfig": "src/proxy.conf.json"
       }
     }
     ```
  3. Restart the development server.

---

### 9. Browser caching issues

- **Issue**: Changes are not reflected in the browser.
- **Steps**:
  1. Disable browser caching or open the app in an incognito window.
  2. Clear the Angular build cache:
     ```bash
     ng cache clean
     ```
  3. Restart the development server.

---

### 10. Linting or formatting errors

- **Issue**: Errors during `ng lint` or `ng format`.
- **Steps**:
  1. Run the linter to identify issues:
     ```bash
     ng lint
     ```
  2. Fix the reported issues manually or use auto-fix:
     ```bash
     ng lint --fix
     ```
  3. Ensure your IDE is configured with the same linting rules as the project.

---

### 11. Missing or outdated global Angular CLI

- **Issue**: The project requires a specific Angular CLI version.
- **Steps**:
  1. Check the Angular CLI version in the project:
     ```bash
     ng version
     ```
  2. If the global CLI version is outdated, update it:
     ```bash
     npm install -g @angular/cli@latest
     ```
  3. If the project requires a specific version, install it globally:
     ```bash
     npm install -g @angular/cli@<version>
     ```

---

### 12. Debugging runtime errors

- **Issue**: Errors in the browser console.
- **Steps**:
  1. Open the browser's developer tools (F12) and check the console for errors.
  2. Use source maps to trace errors back to the original TypeScript code.
  3. Add breakpoints in the browser or use `debugger` statements in your code.

---

### General Tips

- Always read the error messages carefully—they often provide clues about the root cause.
- If all else fails, search for the error message online—chances are someone else has encountered the same issue!
