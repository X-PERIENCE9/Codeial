const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const port = 8000;
const app = express();

app.use(express.static('./assets'));

// extracting styles and scripts from css or jss ofsub pages,
// to the layout (with the layout.css linking line in .ejs templates)

// for css(styles)
app.set('layout extractStyles', true);

// for js(scripts)
app.set('layout extractScripts', true);



app.use(expressLayouts);


// using central express router
app.use('/', require('./routes/index'));


// set-up view engine
app.set('view engine', 'ejs');

// indicating where are views (ejs templates) present.
app.set('views', './views');





app.listen(port, function(err){
    if(err){
        // from now we use interpolation
        // nothing new just like string in '' or ""
        // but some variable(which has to be printed) also added...
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});