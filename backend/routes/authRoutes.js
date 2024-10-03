const { googleAuth } = require('../controllers/authController');

const router=require('express').Router()

// for testing
router.get('/test',(req,res)=>{
    res.send('testing passed')
})

router.get('/google',googleAuth)

module.exports=router;