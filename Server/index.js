const express = require('express');

const app = express();
const PORT = 3001;


app.get('/hello/:name', (req, res) => {
    const name = req.params.name; // 
    res.send(`<h1>Hello ${name}</h1>`); // 
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server Start at http://localhost:${PORT}`);
})

app.get('/yeu/:id', (req, res) => {
    var i = req.params.id;
    res.send(`<h1>Yeu ${i}</h1>`);
});
