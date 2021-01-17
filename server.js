const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/db.config').get(process.env.NODE_ENV);
const userRoutes = require("./routes/user.routes")
const uploadRoutes = require("./routes/upload.routes")

const app = express();
// app use
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use('/user', userRoutes);
app.use('/upload', uploadRoutes)

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    if (err) console.log(err);
    console.log("database is connected");
});

// listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
});
