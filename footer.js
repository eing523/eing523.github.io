const pacificTime = document.getElementById("pacific-time");
const pacificTimeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "America/Los_Angeles",
  timeZoneName: "short",
});

function updatePacificTime() {
  const now = new Date();
  pacificTime.dateTime = now.toISOString();
  pacificTime.textContent = pacificTimeFormatter.format(now);
}

updatePacificTime();
window.setInterval(updatePacificTime, 1000);
