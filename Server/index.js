const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const PORT = process.env.PORT || 5432;

app.listen (5432);