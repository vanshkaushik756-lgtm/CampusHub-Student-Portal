async function loadDashboard() {
  try {
    const response = await fetch("https://campushub-student-portal.onrender.com/api/dashboard")
    if (!response.ok) throw new Error("Dashboard API unavailable");
    const data = await response.json();
    const values = document.querySelectorAll(".stat-value");
    if (values.length >= 4) {
      values[0].innerHTML = `${data.attendance}<span>%</span>`;
      values[1].textContent = String(data.coursesEnrolled).padStart(2, "0");
      values[2].innerHTML = `${String(data.assignmentsCompleted).padStart(2, "0")}<span class="muted-value">/ ${String(data.assignmentsTotal).padStart(2, "0")}</span>`;
      values[3].textContent = data.cgpa.toFixed(1);
    }
    const greeting = document.querySelector(".welcome-row h1");
    if (greeting) greeting.innerHTML = `Good evening, ${escapeHtml(data.studentName)} <span>✦</span>`;
  } catch (error) {
    console.warn("Using demonstration content:", error.message);
    showToast("Showing the included demo information.");
  }
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    document.getElementById("sidebar").classList.remove("open");
  });
});
document.getElementById("notifyBtn").addEventListener("click", () => showToast("You're all caught up on notifications."));
document.getElementById("eventBtn").addEventListener("click", () => showToast("Campus Cultural Fest — 2 December, 10:00 AM. Registration desk: Student Centre."));
document.getElementById("downloadBtn").addEventListener("click", async () => {
  let report = "CAMPUSHUB — STUDENT SUMMARY\nStudent: CampusHub demo student\n";
  try {
    const response = await fetch("https://campushub-student-portal.onrender.com/api/dashboard")
    if (response.ok) {
      const data = await response.json();
      report += `Attendance: ${data.attendance}%\nCourses enrolled: ${data.coursesEnrolled}\nAssignments: ${data.assignmentsCompleted} of ${data.assignmentsTotal} completed\nCurrent CGPA: ${data.cgpa}\n`;
    }
  } catch (_) {}
  report += "\nDemonstration project report. Replace sample data with verified student information.";
  const blob = new Blob([report], {type:"text/plain"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "campushub-student-report.txt"; a.click();
  URL.revokeObjectURL(url);
  showToast("Your student report has been downloaded.");
});
loadDashboard();
