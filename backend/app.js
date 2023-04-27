const express = require("express")
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser")
const errorHandler = require("../backend/middleware/error")
const path = require('path');

//import routes
const authRoutes = require('../backend/routes/authRoutes')
const userRoutes = require('../backend/routes/userRoutes')
const jobsTypeRoutes = require('../backend/routes/jobsTypeRoutes')
const jobRoute = require('../backend/routes/jobsRoutes')

//database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());


//auth Routes
app.use('/api' , authRoutes)
//user Routes
app.use('/api' , userRoutes)
//job type routes
app.use('/api' , jobsTypeRoutes)
//job type routes
app.use('/api' , jobRoute)

__dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }



// error middleware
app.use(errorHandler);




//port 
const port = process.env.PORT || 8000

app.listen(port ,()=>{
    console.log(`server running on port ${port}`);
})

