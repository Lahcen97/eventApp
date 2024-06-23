```markdown
# EventApp

EventApp is a comprehensive event management application built with Express.js, Sequelize ORM, and SQLite. It supports various functionalities like user management, event management, ticketing, and more.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Event Routes](#event-routes)
  - [Other Routes](#other-routes)
- [Project Structure](#project-structure)
- [Database Inspection](#database-inspection)
- [Dependencies](#dependencies)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12 or later)
- npm (v6 or later)

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Lahcen97/eventApp.git
   cd eventApp
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Start the application:

   ```sh
   npm start
   ```

2. The application will be running at `http://localhost:3000`.

## API Endpoints

### User Routes

#### Create a User

- **URL:** `POST /users`
- **Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

- **Response:**

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "updatedAt": "2023-06-20T15:00:00.000Z",
    "createdAt": "2023-06-20T15:00:00.000Z"
  }
  ```

#### Get All Users

- **URL:** `GET /users`
- **Response:**

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2023-06-20T15:00:00.000Z",
      "updatedAt": "2023-06-20T15:00:00.000Z"
    }
  ]
  ```

### Event Routes

- **URL:** `POST /events`
- **Body:** Similar to user creation but for events.
- **Response:** Event object created.

### Other Routes

- Refer to the source code for specific details on routes like `/tickets`, `/packages`, `/payments`, etc.

## Project Structure

```plaintext
eventApp/
├── src/
│   ├── bin/                       # Application startup scripts
│   ├── config/                    # Configuration files
│   ├── controllers/               # Route controllers
│   ├── middleware/                # Custom middleware
│   ├── models/                    # Sequelize models
│   ├── routes/                    # Route definitions
│   ├── services/                  # Business logic and services
│   ├── utils/                     # Utility functions
│   └── app.ts                     # Main application file
├── database.sqlite                # SQLite database file
├── Dockerfile                     # Docker configuration
├── package.json                   # Project metadata and dependencies
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Database Inspection

To inspect the SQLite database, you can use any SQLite client. Below are steps to use SQLite CLI:

1. Open terminal and navigate to the project directory.
2. Run the following command:

   ```sh
   sqlite3 database.sqlite
   ```

3. To view all users, run:

   ```sql
   SELECT * FROM Users;
   ```

Alternatively, you can use a GUI tool like **DB Browser for SQLite**:

1. [Download DB Browser for SQLite](https://sqlitebrowser.org/dl/).
2. Open the `database.sqlite` file.
3. Navigate to the `Browse Data` tab to view the contents of the `Users` table.

## Dependencies

- express
- sequelize
- sqlite3
- morgan
- cookie-parser
- http-errors
- typescript
- ts-node

## License

This project is licensed under the MIT License.
```

### Instructions for Adding the README to GitHub

1. **Create the README.md file:**
   - In the root directory of your project, create a file named `README.md`.
   - Copy and paste the content above into the `README.md` file.

2. **Commit and Push to GitHub:**
   - Open your terminal and navigate to your project directory.
   - Run the following commands to add, commit, and push the changes to your GitHub repository:

     ```sh
     git add README.md
     git commit -m "Add README.md"
     git push origin main
     ```

This `README.md` provides a comprehensive guide to setting up and running your application, including API endpoint documentation and instructions for inspecting the SQLite database.
