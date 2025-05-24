const socket = io();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("globe"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
const globeTexture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/earth_atmos_2048.jpg');
const globeMaterial = new THREE.MeshBasicMaterial({ map: globeTexture });
const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

camera.position.z = 12;

// Add visitor dot
function addVisitorDot(lat, lon) {
  const radius = 5;
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  const dotGeo = new THREE.SphereGeometry(0.07, 8, 8);
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const dot = new THREE.Mesh(dotGeo, dotMat);
  dot.position.set(x, y, z);
  scene.add(dot);
}

// When new visitor joins
socket.on("new-visitor", ({ lat, lon }) => {
  addVisitorDot(lat, lon);
});

function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();
