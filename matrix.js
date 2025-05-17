const matrixCanvas = document.getElementById("matrix");
const ctxMatrix = matrixCanvas.getContext("2d");

matrixCanvas.height = window.innerHeight;
matrixCanvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = matrixCanvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctxMatrix.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctxMatrix.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  ctxMatrix.fillStyle = "#00ff00";
  ctxMatrix.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctxMatrix.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
