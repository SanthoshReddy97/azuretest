const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({msg : "hello world !! Azure testing"})
});

app.listen(8080, (err, succcess) => {
    if (err) console.log(err)
    else console.log("port runninng on 3000");
});
