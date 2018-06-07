const createError = require('http-errors'),
      express = require('express'),
      app = express(),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      // mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      axios = require('axios'),
      Item = require('./models/item.js'),
      nodemailer = require('nodemailer'),
      mailExec = require('./appscripts.js');

      require('dotenv').config();

// const AutoClass = require('./macro-functions/macro-assets');
// console.log(AutoClass.autoConstructor);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

[
  `node_modules/materialize-css/dist/`,
  `node_modules/axios/dist/`,
  `node_modules/jquery/dist`,
  `node_modules/masonry-layout/dist`,
  `public`,
].forEach((i) => {
  app.use(express.static(`${__dirname}/${i}`));
});

// const macro = require('./macro-functions/macro-assets.js');
// ROUTES ----------------------------------------------------------------------
// var itemRoutes = require('./routes/items.js');
// app.use('/api/items', itemRoutes);

// ------------------------------------
const app_title = `House of Cars`;
// const narrative = 'narrative';
app.get('/', (req, res) => {
	res.render('index.ejs', {title: app_title});
});
app.get('/about-us', (req, res) => {
  res.render('about-us.ejs', {title: app_title});
});
app.get('/services', (req, res) => {
  res.render('services.ejs', {title: app_title});
});
app.get('/commission', (req, res) => {
  res.render('commission.ejs', {title: app_title});
});
app.get('/contact', (req, res) => {
  res.render('contact.ejs', {title: app_title});
});
app.get('/offers-and-finance', (req, res) => {
  res.render('offers-and-finance.ejs', {title: app_title});
});
app.get('/accessories', (req, res) => {
  res.render('accesories.ejs', {title: app_title});
});
app.get('/news', (req, res) => {
  res.render('news.ejs', {title: app_title});
});



// ==============================
app.post('/get_in_touch', function (req, res) {
  
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465, //587 not secure, 465 secure
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_USER, // generated ethereal user
            pass: process.env.GMAIL_PASS // generated ethereal password
        }
    });
    var bodyToSend  = req.body;
    console.log(bodyToSend);
    // setup email data with unicode symbols
    let priceMin, priceMax, carYear, kmMin, kmMax, engineCmc, transmission, noDoors, fuelType;
    let bodyStyle;
    if (req.body.client_price_min) {priceMin = req.body.client_price_min}else {
      priceMin = `unspecified`;
    };
    if (req.body.client_price_max) {priceMax = req.body.client_price_max}else {
      priceMax = `unspecified`;
    };
    if (req.body.client_car_year) {carYear = req.body.client_car_year}else {
      carYear = `unspecified`;
    };
    if (req.body.client_car_km_min) {kmMin = req.body.client_car_km_min}else {
      kmMin = `unspecified`;
    };
    if (req.body.client_car_km_max) {kmMax = req.body.client_car_km_max}else {
      kmMax = `unspecified`;
    };
    if (req.body.client_car_engine_cmc) {engineCmc = req.body.client_car_engine_cmc}else {
      engineCmc = `unspecified`;
    };
    if (req.body.client_car_transmission) {transmission = req.body.client_car_transmission}else {
      tansmission = `unspecified`;
    };
    if (req.body.client_car_no_doors) {noDoors = req.body.client_car_no_doors}else {
      noDoors = `unspecified`;
    };
    if (req.body.client_car_fuel_type) {fuelType = req.body.client_car_fuel_type}else {
      fuelType = `unspecified`;
    };
    if (req.body.client_car_body_style) {bodyStyle = req.body.client_car_body_style} else{
      bodyStyle = `unspecified`;
    };
    let mailOptions = {
        from: '"HOC 👻" <hoccommissions@gmail.com>', // sender address
        to: 'hoccommissions@gmail.com', // list of receivers
        subject: 'HOC WEB => Contact Information Submitted', // Subject line
        text: 
        `Contact Name: ${req.body.contact_name},
        Phone Number: ${req.body.contact_number}, 
        Email: ${req.body.mail}
        `// plain text body
        // html: '<h3>green</h3>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

});
//===============================



 

// app.get('/adminview/34gwr49eirunfker4dfvg98ucf', (req, res) => {
//   res.render('adminview.ejs', {title: app_title});
// });

app.post('/commission_submit', (req, res) => {

nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465, //587 not secure, 465 secure
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_USER, // generated ethereal user
            pass: process.env.GMAIL_PASS // generated ethereal password
        }
    });
    var bodyToSend  = req.body;
    console.log(bodyToSend);
    // setup email data with unicode symbols
    let priceMin, priceMax, carYear, kmMin, kmMax, engineCmc, transmission, noDoors, fuelType;
    let bodyStyle;
    if (req.body.client_price_min) {priceMin = req.body.client_price_min}else {
      priceMin = `unspecified`;
    };
    if (req.body.client_price_max) {priceMax = req.body.client_price_max}else {
      priceMax = `unspecified`;
    };
    if (req.body.client_car_year) {carYear = req.body.client_car_year}else {
      carYear = `unspecified`;
    };
    if (req.body.client_car_km_min) {kmMin = req.body.client_car_km_min}else {
      kmMin = `unspecified`;
    };
    if (req.body.client_car_km_max) {kmMax = req.body.client_car_km_max}else {
      kmMax = `unspecified`;
    };
    if (req.body.client_car_engine_cmc) {engineCmc = req.body.client_car_engine_cmc}else {
      engineCmc = `unspecified`;
    };
    if (req.body.client_car_transmission) {transmission = req.body.client_car_transmission}else {
      tansmission = `unspecified`;
    };
    if (req.body.client_car_no_doors) {noDoors = req.body.client_car_no_doors}else {
      noDoors = `unspecified`;
    };
    if (req.body.client_car_fuel_type) {fuelType = req.body.client_car_fuel_type}else {
      fuelType = `unspecified`;
    };
    if (req.body.client_car_body_style) {bodyStyle = req.body.client_car_body_style} else{
      bodyStyle = `unspecified`;
    };
    let mailOptions = {
        from: '"HOC 👻" <hoccommissions@gmail.com>', // sender address
        to: 'hoccommissions@gmail.com', // list of receivers
        subject: 'HOW WEB => Vehicle Order', // Subject line
        text: 
        `Order data: 
        Client name: ${req.body.client_name}; 
        Email: ${req.body.client_email}; 
        Phone Number: ${req.body.client_phone_number}; 
          Car make: ${req.body.client_car_make};
          Car model: ${req.body.client_car_model};
          Price min: ${priceMin}; 
          Price max: ${priceMax};
          From year: ${carYear};
          Km min: ${kmMin};
          Km max: ${kmMax}; 
          Engine cmc: ${engineCmc};
          Transmission: ${transmission}; 
          Number of doors: ${noDoors};
          Fuel type: ${fuelType};
          Body Style: ${bodyStyle};
          Other options: ${req.body.other_options}`// plain text body
        // html: '<h3>green</h3>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

  Item.create(req.body).then(() => {
    res.redirect('/');
  }).catch((err) => {
    res.redirect('/error404');
  })
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
