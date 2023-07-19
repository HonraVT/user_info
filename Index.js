const express = require('express');
const app = express();

app.use(express.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index3.html');
});

// Handle the GPU info request
app.post('/gpu-info', (req, res) => {
  const { unmaskedVendor, unmaskedRenderer } = req.body;

  const gpuInfo = {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    unmaskedRenderer: unmaskedRenderer,
    unmaskedVendor: unmaskedVendor
  };

  console.log('Received GPU Info:', gpuInfo);

  // Respond with the GPU info as JSON
  res.json(gpuInfo);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
