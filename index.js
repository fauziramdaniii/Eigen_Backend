const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', bookRoutes);
app.use('/api', memberRoutes);
app.use('/api', borrowRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
