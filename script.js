// Image slider functionality
const images = [
  "https://i.imgur.com/UdEqQnB.jpg",
  "https://i.imgur.com/XLzxnz0.jpg"
];
let currentImage = 0;

function showSlide(index) {
  const img = document.getElementById("sliderImage");
  img.src = images[index];
}

function nextSlide() {
  currentImage = (currentImage + 1) % images.length;
  showSlide(currentImage);
}

function prevSlide() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showSlide(currentImage);
}

// Password visibility toggle
const togglePin = document.getElementById("togglePin");
const pinInput = document.getElementById("pin");

togglePin.addEventListener("click", () => {
  const type = pinInput.getAttribute("type") === "password" ? "text" : "password";
  pinInput.setAttribute("type", type);
  togglePin.textContent = type === "password" ? "👁️" : "🙈";
});

// Basic form validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const pin = document.getElementById("pin").value.trim();

  if (!phone.match(/^\d{10}$/)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  if (pin.length < 4) {
    alert("PIN must be at least 4 digits.");
    return;
  }

  alert("Login successful!");
});
