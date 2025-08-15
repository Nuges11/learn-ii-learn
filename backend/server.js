
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); app.use(express.json());
app.get('/api/ping',(req,res)=>res.json({pong:true, time:Date.now()}));
// placeholder routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on',PORT));
