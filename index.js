//import package
const express = require('express');
const bodyParser = require('body-parser');
const swaggerSetup = require('./swagger');

//import routes
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

//config
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', bookRoutes);
app.use('/api', memberRoutes);
app.use('/api', borrowRoutes);

swaggerSetup(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

