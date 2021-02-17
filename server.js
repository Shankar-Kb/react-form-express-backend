const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

//"http://127.0.0.1:5500/"
const app = express();
app.use(cors({
    origin: "http://localhost:3000/"
 }));

const port = process.env.PORT || 3001;

app.get('/users',(req,res)=>{
    const data = fs.readFileSync(path.join(__dirname,"usersData.json"),'utf8');
    res.set({'Content-Type': 'application/json'});
    res.send(JSON.parse(data));
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
})