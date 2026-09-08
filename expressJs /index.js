
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('GET request received at /');
    res.send('Hello, World!');  
})

app.get('/about', (req, res) => {
    console.log('GET request received at /about');
    res.send('This is the About page.');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});