const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("."));

const cors = require("cors");
const rootRouter = require("./routes/rootRouter");
app.use(cors());

app.listen(8080);

app.use("/api", rootRouter);
