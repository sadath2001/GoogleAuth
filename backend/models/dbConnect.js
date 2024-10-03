const mongoose=require('mongoose');

const db_url=process.env.DB_URL;

mongoose.connect(db_url).then(
    ()=>{
        console.log('Database is connected..')
    }).catch((err)=>{
        console.log("Database connection failed")
        console.log('error while connecting: ',err)
    })