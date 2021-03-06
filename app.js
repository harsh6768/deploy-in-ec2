const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');

const route=require('./Routes/routes');
const app=express();

//logger for delopment
app.use(morgan('dev'));

//body parser to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//it will use / as default route
app.use('/',route);

const port=process.env.port||3002;
app.listen(port,(err)=>{

    if(err) console.log(err);
    console.log(`Server is up on ${port} ...`);

})