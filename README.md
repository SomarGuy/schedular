# Interview Schedular

Interview Schedular is a straightforward interview appointment scheduling tool designed to showcase the capabilities of a responsive, single-page web application built with React. This app is optimized for use across various devices. Although it does not incorporate user account management, it stores scheduling information in a database and updates the schedule for simultaneous users via WebSockets.

Key technologies employed in this project are React, WebPack, Axios for client-side, Node.js, Express, WebSockets, and PostgreSQL for server-side development. In addition, Storybook, Testing Library, WebPack Dev Server, Jest, and Cypress have been utilized for development and testing purposes.

Interview Schedular is not suitable for real-world production use and is only for demonstration and educational purposes.

## **Screenshots**
### Home
!['Home Page']()
Home page of Schedular.

### Book Appointment
!['Book-an-appointment']()
A user can choose any empty slot to book an appointment.

### No Spots Available
!['No-spots-available']()
When no spots are available, it'll show there are no spots available.

### Deleting Appointment
!['Deleting-appointment']()
When a user wants to delete an appointment, there will be a confirmation popup.

### Edit Appointment
!['Edit-appointment']()
When a user wants to edit an appointment, there will be a option to edit the name and interviewer.


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
