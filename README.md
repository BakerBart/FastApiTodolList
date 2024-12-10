# To-Do List Application

A simple To-Do List application built using Python FastAPI for the backend and React for the frontend. The application allows you to add, display, mark as completed, and delete tasks. Application is not using database, so the data is not persistent between sessions.

## Features

- Add new tasks
- Display the list of tasks
- Mark tasks as completed/uncompleted
- Delete tasks
- Responsive user interface

## Demo


(Include screenshots or animations showcasing the application's functionality)

## Requirements

### Backend:
 - Python 3.7 or higher
 - FastAPI
 - Uvicorn
   
### Frontend:
 - Node.js 14 or higher
 - npm or yarn

## Installation

### Backend

1. Clone the repository and navigate to the backend directory:

 `git clone https://github.com/BakerBart/FastApiTodolList.git`
 
`cd FastApiTodolList/backend`

2. Create and activate a virtual environment:

 `python3 -m venv venv`
 
 `source venv/bin/activate`

3. Install required packages:

 `pip install -r requirements.txt`

### Frontend

1. Navigate to the frontend directory:

 `cd ../frontend`

2. Install dependencies:

 `npm install`

 Ensure that you have a package.json file with the appropriate dependencies.

## Running the Application

### Starting the Backend

1. Navigate to backend directory

`cd ../backend`

2. Start the backend server:

 `python3 main.py`

 The server should be running at http://localhost:8000.

### Starting the Frontend

1. Navigate to the frontend directory:

 `cd ../frontend`

2. Start the React application:

 `npm run dev`

 The application should be available at http://localhost:5173.

## Usage

1. Adding a Task:
 - Enter the task description in the input field.
 - Click the "Add Task" button.

2. Marking a Task as Completed:
 - Click on the task description in the list to toggle its completion status.

3. Deleting a Task:
 - Click the "Delete" button next to the task you wish to remove.

## Project Structure

- backend/: Contains the backend code using FastAPI.
- frontend/: Contains the React application.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

- Bartosz Piekarz
- Email: bakercodemkar@gmail.com
---

If you have any questions or suggestions, feel free to contact me via GitHub or email.
