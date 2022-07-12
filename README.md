# T3A2-Fullstack App - Fleet Management Dashboard

### Purpose:
The purpose of this full-stack application is to provide an efficient and well-designed fleet management dashboard application for internal use by transport businesses to manage their vehicles, drivers and task allocation. After speaking with a local courier business and assessing what problems they face, we found that the most important aspects we could assist with were the ability to manage their fleet and keep track of aspects such as driver to vehicle allocation, route allocation, vehicle kilometres, and vehicle service/maintenance tracking. With this information, we have worked to deliver a dashboard-style application that displays all of the required information in elegantly designed cards, graphs, charts and calendars. The purpose of the dashboard-style is to maintain a strong UX/UI design and provide all of the required information in one place to increase user productivity and ease of use. 

### Functionality / Features:
The functionality and features of the application are dependent on the level of authorisation of the user. Within the application, there are two roles that can be assigned to the user: driver and admin. The driver role has limited access to the application and cannot view information pertaining to other drivers within the business. The driver features are largely based on providing a single application for drivers to report mileage and information for their assigned vehicles which are then passed on to the admin. The admin role has access to the full set of features within the application as well as information pertaining to all drivers of the business. The admin role has been designed to assist business managers in their day to management tasks.

#### Driver Features:
-   Ability to report weekly mileage
-   Ability to report damages/issues with vehicles
-   Reminder for upcoming vehicle services
-   Ability to view assigned vehicle and delivery route


#### Admin Features:
-   Ability to create routes
-   Ability to assign drivers to vehicles/routes
-   Ability to view reports and comments from drivers on km's/vehicle condition
-   Calendar for keeping track of upcoming vehicle services


### Target Audience:
- Courier Businesses
- Fleet Managers or Fleet Management Companies
- Dispatch Managers

### Tech Stack:
-   MERN
    -   MongoDB
    -   Express.js
    -   React.js
    -   Node.js
- Syncfusion - Components/Frameworks
- Tailwind - CSS Framework
- Heroku - Deployment



## Dataflow Diagram:
[Click Here: for link to DFD](https://www.figma.com/file/yYl4y2torN6Cd1u7ivQRUc/DFD-Fleet-Management-App?node-id=0%3A1).

<img src="docs/images/DFD.png" alt="Dataflow-Diagram" title="DFD" width=/>

## Aplication Architecture Diagram:

<img src="docs/images/AAD.png" alt="Dataflow-Diagram" title="DFD" width=/>

### User Stories:

#### Driver:
-   As a driver, I want to be able to report my weekly mileage for the vehicle that I have been assigned.
-   As a driver, I want to be able to view a calendar to check when upcoming services are due for my vehicles.
-   As a driver, I want to be able to report damage or issues with my vehicle to be viewed by the Admin/Fleet Manager.
-   As a driver, I want to be able to view my assigned vehicle and delivery route so I can plan my day accordingly.

#### Admin:
-   As an Admin/Fleet Manager I want to be able to create routes for the delivery drivers.
-   As an Admin/Fleet Manager I want to be able to assign drivers to a vehicle.
-   As an Admin/Fleet Manager I want an organised dashboard so that my drivers can add comments on km’s and vehicle condition.
-   As an Admin/Fleet Manager I want to be able to assign drivers and vehicles to a delivery route.
-   As an Admin/Fleet Manager I want to be able to view a calendar to see upcoming services for all vehicles.
-   As an Admin/Fleet Manager I want to be able to view estimated fuel costs for vehicles.
-   As an Admin/Fleet Manager I want a graph that shows the mileage done by a given vehicle and how many km’s until the vehicle's next service.

[Click Here: for UserStories on Trello](https://trello.com/b/juZMqDSO/fleet-management-dashboard).

## Wireframes:

<img src="docs/images/Wireframes.png" alt="Wireframes" title="Wireframes" width=/>

#### Desktop-Login:
<img src="docs/images/Login-Desktop.png" alt="Login-Desktop" title="Login-Desktop" width=/>

#### Driver:
<img src="docs/images/Desktop-Driver-MyVehicle.png" alt="Desktop-Driver-MyVehicle" title="Desktop-Driver-MyVehicle" width=/>

<img src="docs/images/Desktop-Driver-MyRoutes.png" alt="Desktop-Driver-MyRoutes" title="Desktop-Driver-MyRoutes" width=/>

#### Admin:
<img src="docs/images/Desktop-Admin-DashboardSummary.png" alt="Desktop-Admin-DashboardSummary" title="Desktop-Admin-DashboardSummary" width=/>

<img src="docs/images/Desktop-Admin-PlanRoutes.png" alt="Desktop-Admin-PlanRoutes" title="Desktop-Admin-PlanRoutes" width=/>

<img src="docs/images/Desktop-Admin-Calendar.png" alt="Desktop-Admin-Calendar" title="Desktop-Admin-Calendar" width=/>

<img src="docs/images/Desktop-Admin-DriverDetails.png" alt="Desktop-Admin-DriverDetails" title="Desktop-Admin-DriverDetails" width=/>

#### Mobile-Login:

<img src="docs/images/Mobile-Login-Signup.png" alt="Mobile-Login-Signup" title="Mobile-Login-Signup" width=/>

#### Driver-Mobile:
<img src="docs/images/Mobile-Driver-MySchedule.png" alt="Mobile-Driver-MySchedule" title="Mobile-Driver-MySchedule" width=/>

#### Admin-Mobile:

<img src="docs/images/Mobile-Admin-DashboardSummary.png" alt="Mobile-Admin-DashboardSummary" title="Mobile-Admin-DashboardSummary" width=/>

<img src="docs/images/Mobile-Admin-Calendar.png" alt="Mobile-Admin-Calendar" title="Mobile-Admin-Calendar" width=/>

<img src="docs/images/Mobile-Admin-ManageRoutes.png" alt="Mobile-Admin-ManageRoutes" title="Mobile-Admin-ManageRoutes" width=/>

<img src="docs/images/Mobile-Admin-VehicleDetails.png" alt="Mobile-Admin-VehicleDetails" title="Mobile-Admin-VehicleDetails" width=/>

<img src="docs/images/Mobile-Admin-DriverDetails.png" alt="Mobile-Admin-DriverDetails" title="Mobile-Admin-DriverDetails" width=/>

## Trello Screenshots:
[Trello URL: https://trello.com/b/juZMqDSO/fleet-management-dashboard](https://trello.com/b/juZMqDSO/fleet-management-dashboard)

<img src="docs/images/1.png" alt="Trello-Screenshot" title="Trello-Screenshot" width=/>
<img src="docs/images/2.png" alt="Trello-Screenshot" title="Trello-Screenshot" width=/>
<img src="docs/images/3.png" alt="Trello-Screenshot" title="Trello-Screenshot" width=/>
<img src="docs/images/4.png" alt="Trello-Screenshot" title="Trello-Screenshot" width=/>
<img src="docs/images/5.png" alt="Trello-Screenshot" title="Trello-Screenshot" width=/>


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
