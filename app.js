const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');

const wikiRouter = require('./routes/wiki.js');
const usersRouter = require('./routes/users.js');

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/publicFolder'));
app.use(express.urlencoded({extended: false}));
app.use('/wiki', wikiRouter);
app.use('/users', usersRouter);

app.get('/', (req, res, next) => {
    res.send(layout(''));
})

const { db, Page, User } = require('./models');

const PORT = 3000;

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

  const init = async () => {
    await db.sync();
    //^^this is important!!!


    // make sure that you have a PORT constant
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  }

  init();
