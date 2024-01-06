# Todo List App

## Overview

This is a full-stack Todo list application built using Next.js for the frontend, Express.js for the backend, and MongoDB for data storage. The application follows RESTful principles for API design and incorporates a visually appealing user interface with Tailwind CSS.

## Features

- Add, edit, and delete tasks.
- Mark tasks as completed or pending.
- Responsive and visually appealing design.
- RESTful API endpoints for CRUD operations.
- MongoDB integration for data storage.

## Technologies Used

- Frontend: Next.js
- Design Framework: Tailwind CSS
- Backend: Express.js
- Database: MongoDB

## Getting Started

#### 1. Clone the repository:

```bash
git clone https://github.com/JealousGx/todo-task-ccript.git
cd todo-list

```

#### 2. Install dependencies

```bash
# For frontend
cd frontend
npm install

# For backend
cd backend
npm install

```

#### 3. Set up the environment:

Create a .env file in the backend directory and add your MongoDB connection string:

```env
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

```

#### 4. Run the application:

```bash
# For frontend
cd frontend
npm run dev

# For backend
cd backend
npm start

```

Access the app at http://localhost:3000 and api at http://localhost:3001.

## API Endpoints

- GET /api/tasks: Get all tasks.
- POST /api/tasks: Create a new task.
- PUT /api/tasks/:id: Update a task.
- DELETE /api/tasks/:id: Delete a task.

## Database Schema

The MongoDB schema for tasks:

```javascript
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
```

## App Preview

![App Preview](https://raw.githubusercontent.com/JealousGx/todo-task-ccript/main/assets/todo-app.jpeg?token=GHSAT0AAAAAACMO2SMNU33CO54GI6FKWR2WZMZQAVA)

![App Preview (No Task)](https://raw.githubusercontent.com/JealousGx/todo-task-ccript/main/assets/todo-app-no-task.jpeg?token=GHSAT0AAAAAACMO2SMMBZ3UJIPIVNTKXXCEZMZQBPA)

## Further Enhancements

This Todo list app serves as a foundational project, and there are various opportunities for enhancements and improvements. Consider the following areas for future development:

#### 1. Security Improvements

- <b>Authentication</b>: Implement user authentication to secure user-specific tasks and data.
- <b>Authorization</b>: Enhance the authorization mechanisms to control access to various features based on user roles.
- <b>Data Validation</b>: Strengthen data validation to prevent potential security vulnerabilities.

#### 2. Performance Optimization

- <b>Code Splitting</b>: Implement code splitting to optimize the loading time of the application.
- <b>Caching</b>: Utilize caching mechanisms to reduce redundant API calls and improve performance.
- <b>Lazy Loading</b>: Implement lazy loading for components to optimize initial page load.

#### 3. UI/UX Enhancements

- <b>Animations</b>: Introduce engaging animations to enhance the user experience.
- <b>Themes</b>: Implement different themes or allow users to customize the app's appearance.
- <b>Drag-and-Drop</b>: Add drag-and-drop functionality for easy task organization.
