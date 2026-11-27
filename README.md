CampusHub – Student Portal

CampusHub is a responsive student portal designed to help students view academic information, courses, attendance, assignments, notices and campus events.

Features

- Responsive student dashboard
- Attendance and CGPA overview
- Course progress tracking
- Campus notices
- Upcoming events
- Downloadable student report
- Backend REST API

Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

Project Structure

CampusHub/
├── index.html
├── styles.css
├── script.js
├── server.js
├── package.json
└── README.md

Installation and Setup

1. Install Node.js (version 18 or later).
2. Clone or download this repository.
3. Open the project folder in a terminal.
4. Install dependencies:

npm install

5. Start the server:

npm start

6. Open http://localhost:3000 in your browser.

API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Server status |
| GET | `/api/dashboard` | Student dashboard data |
| GET | `/api/notices` | Campus notices |
| GET | `/api/courses` | Course information |
| GET | `/api/events` | Upcoming events |

Note

This project currently uses demonstration data. It is not connected to an official university database.

Author

Vansh Kaushik
