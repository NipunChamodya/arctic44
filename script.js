function updateCountdown() {
  const now = new Date().getTime();
  const countdownDate = new Date("May 25, 2025 00:00:00").getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance > 0) {
    document.getElementById("countdown").innerHTML =
      `${days}d ${hours}h ${mins}m ${secs}s`;
  } else {
    clearInterval(timer);
    window.location.href = "response.html";
  }
}

let timer = setInterval(updateCountdown, 1000);

function goToResponsePage() {
  window.location.href = "response.html";
}
