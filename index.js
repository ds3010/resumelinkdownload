var PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.download("./daniel_seijas_resume.pdf");
});

app.listen(PORT);
