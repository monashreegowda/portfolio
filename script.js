const toggle = document.getElementById("themeToggle");
const body = document.body;

// Restore saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});