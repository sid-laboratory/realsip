const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

main().catch(err => console.log(err));

async function main() {
    dotenv.config();
    await mongoose.connect(process.env.DB_URI)
    console.log("Connected to DB");
    //------------------------------------------------------
    const app = express()
    const port = process.env.PORT || 3000
    var cors = require('cors')
    
    app.use(express.json());
    app.use(cors()) 
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use("/api", require("./routes/apiRouters"));
    app.get('/', (req, res) => {
      res.send('Hello Ws!')
    })
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

  
}

