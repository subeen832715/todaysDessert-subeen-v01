const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user');
const linksRouter = require('./routes/links');

const { urls } = require('./models');

const morgan = require('morgan');

const app = express();
const port = 3001;

// app.use(
//     session({
//       secret: '@codestates',
//       resave: false,
//       saveUninitialized: true
//     })
//   );
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(
//     cors({
//       origin: ['http://localhost:3000'],
//       methods: ['GET', 'POST'],
//       credentials: true
//     })
//   );
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.status(200).send('Success');
  });

app.set('port', port);
app.listen(app.get('port'), () => {
  //console.log(`app is listening in PORT ${app.get('port')}`);
});

module.exports = app;