const dotenv = require('dotenv');

const express = require('express');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    dotenv.config();

    console.log(process.env.DB_URI);
    await mongoose.connect(process.env.DB_URI)
    
    
    //------------------------------------------------------
    
    const app = express()
    const port = 3000
    
    app.use("/api", require("./routes/apiRouters"));

    app.get('/', (req, res) => {
      res.send('Hello Ws!')
    })
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

  
}

