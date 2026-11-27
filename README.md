# CampusHub — Student Portal

CampusHub is a responsive student portal demonstration. It brings common campus information into one place: an overview dashboard, attendance summary, course progress, timetable, notices and upcoming events.

## Features

- Responsive student dashboard for desktop and mobile
- Student summary cards for attendance, courses, assignments and CGPA
- Daily timetable and campus notice board
- Course progress and upcoming event sections
- Express.js REST API serving dashboard, notices, courses and event data
- Downloadable student summary report
- Health-check endpoint for the backend

## Technology

- Frontend: HTML5, CSS3 and vanilla JavaScript
- Backend: Node.js and Express.js
- API format: JSON

## Project structure

```text
CampusHub-Full-Stack/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Run locally

1. Install Node.js 18 or later.
2. Download or clone this repository.
3. Open a terminal in the project folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser.

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Backend health check |
| GET | `/api/dashboard` | Student dashboard summary |
| GET | `/api/notices` | Campus notices |
| GET | `/api/courses` | Course list and progress |
| GET | `/api/events` | Upcoming campus events |

Example response from `/api/dashboard`:

```json
{
  "studentName": "Vansh",
  "attendance": 86,
  "coursesEnrolled": 6,
  "assignmentsCompleted": 4,
  "assignmentsTotal": 6,
  "cgpa": 8.4
}
```

## Notes about demonstration data

This repository uses sample data to demonstrate the interface and API. It is not connected to a university database, authentication service, or official student records. Replace the sample values with accurate data and add suitable authentication and database protections before using it for real student information.

## Deployment

The frontend and Express backend are designed to run together as one Node.js application on a host that supports Node.js. Configure the host to run `npm install` during build/setup and `npm start` as the start command. Set `PORT` only if required by the hosting provider.

## Author

Student project submission — CampusHub.
