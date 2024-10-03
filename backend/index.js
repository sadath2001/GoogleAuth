const cors=require('cors')
const express=require('express');
const app=express()
require('dotenv').config();
const port_number=process.env.PORT || 8080;
app.use(cors())
require('./models/dbConnect')
const auth=require('./routes/authRoutes');

// testing
app.get('/',(req,res)=>{
    res.send('Hello from backend');
})

// routing to auth
app.use('/auth/',auth);

// for any other routes, give a 404 error
app.all('*', (req, res, next) => {
    next(new AppError(`Cannot find ${req.originalUrl} on the server`, 404));
});

//listening on port
app.listen(port_number,()=>{
    console.log(`listening on port: ${port_number}`);
})
