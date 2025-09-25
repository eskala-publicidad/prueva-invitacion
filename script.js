// -------- Cuenta regresiva --------
const weddingDate = new Date("October 5, 2025 11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML = "<h3>¡Hoy es el gran día!</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

// -------- Confirmación de asistencia --------
const confirmBtn = document.getElementById("confirm-btn");
const attendanceCount = document.getElementById("attendance-count");
const confirmMessage = document.getElementById("confirm-message");

// Cargar el contador desde localStorage
let count = parseInt(localStorage.getItem("attendanceCount")) || 0;
attendanceCount.textContent = count;

// Verificar si el usuario ya confirmó
const userConfirmed = localStorage.getItem("userConfirmed");

if (userConfirmed === "true") {
  confirmBtn.disabled = true;
  confirmMessage.classList.remove("hidden");
}

confirmBtn.addEventListener("click", () => {
  if (count >= 500) {
    alert("Lo sentimos, el límite de confirmaciones ha sido alcanzado.");
    return;
  }

  if (!localStorage.getItem("userConfirmed")) {
    count++;
    attendanceCount.textContent = count;

    localStorage.setItem("attendanceCount", count);
    localStorage.setItem("userConfirmed", "true");

    confirmBtn.disabled = true;
    confirmMessage.classList.remove("hidden");
  } else {
    alert("Ya has confirmado tu asistencia anteriormente.");
  }
});
