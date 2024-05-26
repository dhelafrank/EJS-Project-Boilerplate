require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const PORT = process.env.PORT || 3001
var indexRouter = require('./routes/index');
const {
  errorScreen
} = require('./controllers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler

app.use(async function (err, req, res, next) {
  res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  const errorScreenInformation = await errorScreen(req)
  res.render('error', errorScreenInformation);
})

app.listen(PORT, () => {
  console.log(`${process.env.PROJECT_NAME} Server is now live on port ${PORT}`)
})

module.exports = app;