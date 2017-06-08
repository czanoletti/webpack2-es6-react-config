//Requiring dependencies----------------------------------

let express = require('express'),


    //Initialize express App and required node modules
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000;

//Configuring the application------------------------------

app
//Routes
    .use('/', express.static(path.join(__dirname, 'public')));


app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});


