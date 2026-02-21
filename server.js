
// Auto-generated Express Server (Cloud Node.js Backend)
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 静态托管当前文件夹，以便直接在服务端通过路由访问 admin.html 管理界面
app.use(express.static(__dirname));

// In-memory database (Replace with MongoDB/MySQL file for production)
let database = [];

// GET endpoint (Used by Admin Panel)
app.get('/', (req, res) => {
    res.json(database);
});

// POST endpoint (Used by Frontend)
app.post('/', (req, res) => {
    const newEntry = {
        _id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        _created: new Date().toISOString(),
        ...req.body
    };
    database.push(newEntry);
    console.log("New data received:", newEntry);
    res.status(201).json({ success: true, id: newEntry._id });
});

// Admin Panel Access Route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`☁️ Backend Server is Running!`);
    console.log(`🔌 Port: ${PORT}`);
    console.log(`🛠️ Admin Panel: http://localhost:${PORT}/admin`);
    console.log(`📡 API Endpoint: http://localhost:${PORT}/`);
    console.log(`=================================`);
});