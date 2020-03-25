// ------------------------------------- SERVER CONFIG -------------------------------------- //

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


// ---------------------------------------- DATABASE ---------------------------------------- //

const db = require('./models');

// ----------------------------------------- ROUTES ----------------------------------------- //

const routes = require('./routes');

// --------------------------------------- MIDDLEWARE --------------------------------------- //

// Serve Public Directory
app.use(express.static(`${__dirname}/public`));

// BodyParser - Make Request Data Avaialble on req.body
app.use(bodyParser.json())


//Home View

app.get('/', (req, res) =>
{
  res.sendFile("/views/index.html",
  {
    root: __dirname,
  });
});

app.use('/api/v1/', routes.api);


// -------------------------------------- START SERVER -------------------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));