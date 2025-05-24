const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());

io.on("connection", async (socket) => {
  try {
    const forwarded = socket.handshake.headers['x-forwarded-for'];
    const ip = (forwarded || socket.handshake.address || "").split(",")[0] || "8.8.8.8";
    const res = await axios.get(`http://ip-api.com/json/${ip}`);
    const { lat, lon } = res.data;

    io.emit("new-visitor", { lat, lon });
    console.log(`New visitor: ${ip} (${lat}, ${lon})`);
  } catch (err) {
    console.error("GeoIP error:", err.message);
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
