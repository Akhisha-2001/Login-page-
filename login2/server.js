const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const nocache = require('nocache');
const app = express();
app.use(express.static('public'));
app.set('view engine','hbs');
app.use(express.urlencoded({extended : true}));
app.use(express.json());
const router = require('./Routes/user');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}))
app.use(nocache());
app.use(router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
