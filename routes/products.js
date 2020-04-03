var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('products', { title: "Products" });
});


module.exports = router;