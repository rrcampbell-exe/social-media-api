// require express, mongoose
const express = require('express');
const mongoose = require('mongoose');

// set server to use express, establish ports
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// invoke routes directory to interface with API
app.use(require('./routes/api'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// logs mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`👥 Getting social on localhost:${PORT}`));
