const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const sequelize = require('./models');
const router = require("./router");
require("dotenv").config();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

(async () => {
  try {
    await sequelize.sync({force: true})
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();