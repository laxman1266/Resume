const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.get('',(req,res) => {
    res.send("Welcome to Node js")
})
app.listen(port,() => {
    console.log("Server runs on :"+port);
});