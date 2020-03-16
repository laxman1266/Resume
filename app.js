const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'/templates'));
app.get('',(req,res) => {
    res.render("index")
})
app.listen(port,() => {
    console.log("Server runs on :"+port);
});