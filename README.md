# Frontend - React Application with Vite, MobX, and TypeScript
## Setup Instructions

To set up and run the frontend application, follow the steps below:

### 1- Versions: first make sure to have the followings version:
- Node: v20.12.2
- Npm: 10.5.0

### 2- Clone the repository: clone the project from GitHub to your local machine:
- HTTPS: https://github.com/MelissaPleitez/Client_System_Frontend.git
- SSH: git@github.com:MelissaPleitez/Client_System_Frontend.git

### 3- Install dependencies: Navigate to the project folder in your terminal and run the following command to install all required dependencies:
- npm install

### 4- Run the development server: After the installation of dependencies is complete, start the development server by running:
- npm run dev

### 5. Access the app: Once the development server is running, open your browser and go to the URL provided in the terminal (console). By default, Vite uses port 3000, so you can usually access the app by navigating to:
- [This can be http://localhost:(port provided by you system)](http://localhost:3000
)
-However, if a different port is specified by the system, the terminal will display something like this:
  VITE v4.x.x  ready in xxx ms
  Local: http://localhost:xxxx

# Assumptions and Notes

### Application Overview:

This project is a frontend React application that utilizes Vite for bundling, TypeScript for type safety, and MobX for state management. The app interacts with an API for user authentication and fetching client data.

## Technologies Used:
- React.js (for building the user interface)
- Vite (for fast bundling and development server)
- TypeScript (for type safety)
- MobX (for state management)
- React Router (for navigation)
- SweetAlert2 (for error and success pop-ups)
- React Feather (for icons)
  
The application has two main views: the Login page and the Main page. The Login page allows users to authenticate themselves, and the Main page displays client data.

## Folder Structure:
The project is organized as follows:

![image](https://github.com/user-attachments/assets/a0cefe77-8609-4a95-b2d4-6f8b3c8186cd)


# Main Files Explanation
Here are the important files that drive the core functionality of the application:

## UserStore.tsx
This MobX store manages user authentication state, including the email, password, error messages, and authentication status. It also contains a login() method that interacts with the backend to authenticate the user.

### Key features:

- Stores user credentials (email and password)
- Tracks authentication status (isAuthenticated)
- Handles login requests to the backend API
- Displays error messages using SweetAlert2 if authentication fails.

## ClientStore.tsx
This MobX store handles the fetching and managing of client data. It stores client details like name, nationality, occupation, and email in an array, and also manages a loading state (isLoading) and a dark mode toggle.

### Key features:

- Fetches client data from the backend API (/api/clients)
- Manages loading state while fetching data
- Toggles dark mode setting for the UI
  
## ProtectedRoute.tsx
This component checks if the user is authenticated. If not, it redirects them to the login page. This is used to protect certain routes from unauthorized access.

## Packages Used
- react-router-dom: Used for routing and navigation within the app.
- react-sweetalert2: Used to show pop-up alerts for error handling (authentication failures).
- mobx-react: Provides React bindings for MobX to handle state management.
- react-feather: Provides simple, customizable SVG icons.
