var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    //res.render('computation', { title: 'Sai Kiran Thukivakam working on a functions' });
    var x = Math.random()
    var z = Math.random()
    y = Math.hypot(x);
    y1 = Math.ceil(x,z)
    y2 = y = Math.clz32(x);
    res.send("Math.hypot() applied to "+x+" is "+y+"<br></br>"+"Math.ceil() applied to "+x+", "+z+" is "+y1+"<br></br>"+
                "Math.clz32() applied to "+x+" is "+y2);
});

module.exports = router;