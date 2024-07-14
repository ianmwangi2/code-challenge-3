# WEEK-3-CODE-CHALLENGE
Implement a 'mini' web application using JavaScript.

## Introduction
FLATDANGO is a web application that allows users to browse and purchase movie tickets for Flatiron Movie Theater. The application fetches movie data from a JSON server and dynamically updates the user interface to display movie details and ticket availability.

### Project Overview
FLATDANGO uses HTML, CSS, and JavaScript to create a seamless user experience for browsing and purchasing movie tickets. It leverages fetch to communicate with a JSON server hosting movie data, ensuring real-time updates on ticket availability.

Setup Instructions
To run FLATDANGO locally, follow these steps:

1. Clone the repository:
```git clone <repository-url> ```
```cd <project-directory> ```

2. Start the JSON server:

FLATDANGO uses json-server to serve movie data. Ensure Node.js is installed, then install json-server globally and start it:
```npm install -g json-server ```
```json-server --watch db.json --port 3000 ```
This will host the JSON server on http://localhost:3000. ```

3. Open the application:

Open a web browser and navigate to http://localhost:8000 to view FLATDANGO.

## Usage
Upon loading FLATDANGO, users are presented with a list of available movies on the left-hand side. Clicking on a movie displays its details (poster, title, runtime, showtime, available tickets) on the right-hand side. Users can purchase tickets for available shows, and the availability updates dynamically.

## Features
Dynamic Movie List: Displays a list of available movies fetched from the JSON server.
Real-time Updates: Updates ticket availability and button states based on user interactions.
Responsive Design: Ensures compatibility and usability across various devices.
Sold-Out Indication: Changes button text to "Sold Out" and disables it when tickets are no longer available.

### Deployed link
```https://vercel.com/new/ian-mwangis-projects/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=code-challenge-3-j7nrrsn0s-ian-mwangis-projects.vercel.app&projectName=code-challenge-3&s=https%3A%2F%2Fgithub.com%2Fianmwangi2%2Fcode-challenge-3&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1&slug=app-future&slug=en-US&slug=new&slug=ian-mwangis-projects&slug=success ```

### AUTHORS
Ian Mwangi Macharia
