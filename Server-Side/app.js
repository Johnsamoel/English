const express = require("express");
var cors = require('cors')
const app = express();
require("express-async-errors");
const gameRouter = require("./src/routes/gameRouter");
const handleErrors = require("./src/middlewares/handleErrors")
app.use(cors())
app.use(express.json());
app.use("/", gameRouter);
app.use(handleErrors)

const port = 4000 || process.env.PORT;
app.listen(port, () => console.log(`application is running on port ${port}`));
