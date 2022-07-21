const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//  expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();
const PORT = 8000;

// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs' }))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

app.listen(PORT, () => {
    console.log(`Server is listening at Port: ${PORT}`);
})
