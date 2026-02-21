
// Auto-generated Express Server (Cloud Node.js Backend)
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory database (Replace with MongoDB/MySQL for production)
let database = [];

// GET endpoint (Used by Admin Panel)
app.get('/api/data', (req, res) => {
    res.json(database);
});

// POST endpoint (Used by Frontend)
app.post('/api/data', (req, res) => {
    const newEntry = {
        _id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        _created: new Date().toISOString(),
        ...req.body
    };
    database.push(newEntry);
    console.log("New data received:", newEntry);
    res.status(201).json({ success: true, id: newEntry._id });
});

app.listen(PORT, () => {
    console.log(`Cloud API Server running on port ${PORT}`);
    console.log(`Endpoint: http://localhost:${PORT}/api/data`);
});