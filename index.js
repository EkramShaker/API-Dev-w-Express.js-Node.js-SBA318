const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const juiceRoutes = require('./routes/juices');
app.use('/juices', juiceRoutes);

// Home route
app.get('/', (req, res) => {
  res.redirect('/juices');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
