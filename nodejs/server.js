const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
app.get("/")
app.get('/clothing', (req, res) => {
  fs.readFile('./clothing.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post('/clothing', (req, res) => {
  fs.writeFile('./newclothing.json', req.body, 'utf8', (err) => {
    if (err) throw err;
    res.send('Successfully written to file');
  });
});
app.get('/about', (req, res) => {
  res.send('About page');
});
fetch('/clothing')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // do something with the data
  });
