
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.static(__dirname));

let dashboard = {
  studentName: "Vansh",
  attendance: 86,
  coursesEnrolled: 6,
  assignmentsCompleted: 4,
  assignmentsTotal: 6,
  cgpa: 8.4
};

const notices = [
  {
    id: 1,
    title: "Internal assessment schedule",
    description: "Check the updated examination timetable."
  },
  {
    id: 2,
    title: "Annual cultural fest",
    description: "Registrations are now open for students."
  },
  {
    id: 3,
    title: "Library hours extended",
    description: "Library open until 8:00 PM this week."
  }
];

const courses = [
  { id: 1, name: "Business Communication", progress: 72 },
  { id: 2, name: "Principles of Management", progress: 48 },
  { id: 3, name: "Financial Accounting", progress: 90 }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "CampusHub API" });
});

app.get("/api/dashboard", (req, res) => {
  res.json(dashboard);
});

// Update dashboard data from the Admin Panel
app.put("/api/dashboard", (req, res) => {
  const {
    studentName,
    attendance,
    coursesEnrolled,
    assignmentsCompleted,
    assignmentsTotal,
    cgpa
  } = req.body;

  if (
    typeof studentName !== "string" ||
    !studentName.trim() ||
    !Number.isFinite(attendance) ||
    attendance < 0 || attendance > 100 ||
    !Number.isInteger(coursesEnrolled) ||
    coursesEnrolled < 0 ||
    !Number.isInteger(assignmentsCompleted) ||
    assignmentsCompleted < 0 ||
    !Number.isInteger(assignmentsTotal) ||
    assignmentsTotal < assignmentsCompleted ||
    !Number.isFinite(cgpa) ||
    cgpa < 0 || cgpa > 10
  ) {
    return res.status(400).json({
      error: "Please provide valid dashboard details."
    });
  }

  dashboard = {
    studentName: studentName.trim(),
    attendance,
    coursesEnrolled,
    assignmentsCompleted,
    assignmentsTotal,
    cgpa
  };

  res.json({
    message: "Dashboard updated successfully",
    dashboard
  });
});

app.get("/api/notices", (req, res) => {
  res.json({ count: notices.length, notices });
});

app.get("/api/courses", (req, res) => {
  res.json({ count: courses.length, courses });
});

app.get("/api/events", (req, res) => {
  res.json({
    events: [
      {
        id: 1,
        title: "Campus Cultural Fest 2026",
        date: "2026-12-02",
        time: "10:00",
        venue: "Student Centre"
      }
    ]
  });
});

app.use("/api", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`CampusHub running on port ${PORT}`);
});
