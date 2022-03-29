const express = require('express');

const app = express();

const bodyParser = require('body-parser');

//var userinput; 
//var x = 99;

app.use((req, res, next) => {
    console.log('Hello World');
    next();
});

app.use(express.urlencoded({extended: true})); 


app.get('/',(req, res, next) => {  
    res.send('<form action="/" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></form>');
});


app.post('/', function(req, res, next) {
    //userinput = req.body.title;
    console.log(req.body.title);

});


app.use((req, res, next) => {
    res.send('<h1>Test 3</h1>');
})

app.listen(3001);






// 





// 

// const router = express.Router();

// router.get('/',(req, res, next) => {  
//     res.send('<h1>Hello from Express</h1>');
// });




