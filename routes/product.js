const router = require("express").Router();



router.post("/userposttest",(req,res) => {
    const username=req.body.username
    console.log(username);
})

module.exports = router