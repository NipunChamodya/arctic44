const netCanvas = document.getElementById("net");
const ctxNet = netCanvas.getContext("2d");

netCanvas.width = window.innerWidth;
netCanvas.height = window.innerHeight;

const dots = 80;
const distance = 120;
const points = [];

// Track mouse position
const mouse = {
  x: null,
  y: null
};

netCanvas.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

netCanvas.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

// Generate random particles
for (let i = 0; i < dots; i++) {
  points.push({
    x: Math.random() * netCanvas.width,
    y: Math.random() * netCanvas.height,
    vx: Math.random() * 0.5 - 0.25,
    vy: Math.random() * 0.5 - 0.25
  });
}

function drawNet() {
  ctxNet.clearRect(0, 0, netCanvas.width, netCanvas.height);

  // Move and draw particles
  for (let i = 0; i < dots; i++) {
    let p = points[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > netCanvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > netCanvas.height) p.vy *= -1;

    ctxNet.beginPath();
    ctxNet.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctxNet.fillStyle = "#006699";
    ctxNet.fill();
  }

  // Draw lines between nearby points
  for (let i = 0; i < dots; i++) {
    for (let j = i + 1; j < dots; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < distance) {
        ctxNet.beginPath();
        ctxNet.moveTo(points[i].x, points[i].y);
        ctxNet.lineTo(points[j].x, points[j].y);
        ctxNet.strokeStyle = `rgba(0, 102, 153, ${1 - dist / distance})`;
        ctxNet.stroke();
      }
    }

    // Draw line from mouse to point if close
    if (mouse.x !== null && mouse.y !== null) {
      const dx = points[i].x - mouse.x;
      const dy = points[i].y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < distance) {
        ctxNet.beginPath();
        ctxNet.moveTo(points[i].x, points[i].y);
        ctxNet.lineTo(mouse.x, mouse.y);
        ctxNet.strokeStyle = `rgba(0, 102, 153, ${1 - dist / distance})`;
        ctxNet.stroke();

        // Optional: attract particle slightly toward cursor
        points[i].x -= dx * 0.005;
        points[i].y -= dy * 0.005;
      }
    }
  }

  requestAnimationFrame(drawNet);
}

drawNet();

// Handle resizing
window.addEventListener("resize", () => {
  netCanvas.width = window.innerWidth;
  netCanvas.height = window.innerHeight;
});
