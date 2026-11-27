const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Demo data for the CampusHub student dashboard.
// Replace these values with verified data or a database integration for real use.
const dashboard = {
  studentName: "Vansh",
  attendance: 86,
  coursesEnrolled: 6,
  assignmentsCompleted: 4,
  assignmentsTotal: 6,
  cgpa: 8.4
};

const notices = [
  { id: 1, day: "29", month: "NOV", title: "Internal assessment schedule", description: "Check the updated examination timetable.", department: "Academic office" },
  { id: 2, day: "02", month: "DEC", title: "Annual cultural fest", description: "Registrations are now open for students.", department: "Student council" },
  { id: 3, day: "05", month: "DEC", title: "Library hours extended", description: "Library open until 8:00 PM this week.", department: "Central library" }
];

const courses = [
  { id: 1, name: "Business Communication", unit: "Unit 04 · Communication skills", progress: 72 },
  { id: 2, name: "Principles of Management", unit: "Unit 02 · Planning & organising", progress: 48 },
  { id: 3, name: "Financial Accounting", unit: "Unit 05 · Final accounts", progress: 90 }
];

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "CampusHub API" });
});

app.get("/api/dashboard", (_req, res) => {
  res.json(dashboard);
});

app.get("/api/notices", (_req, res) => {
  res.json({ count: notices.length, notices });
});

app.get("/api/courses", (_req, res) => {
  res.json({ count: courses.length, courses });
});

app.get("/api/events", (_req, res) => {
  res.json({
    events: [
      { id: 1, title: "Campus Cultural Fest 2026", date: "2026-12-02", time: "10:00", venue: "Student Centre" }
    ]
  });
});

// Keep unknown API routes explicit instead of silently returning the website.
app.use("/api", (_req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`CampusHub is running on http://localhost:${PORT}`);
});
