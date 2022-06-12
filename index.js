const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/users");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = 3000;

app.get("/", (req, res) => {
   const kelas = {
      id: 1,
      nama: "Seni",
   };
   res.send(kelas);
});

app.get("/about", (req, res) => {
   res.redirect("https://expressjs.com/en/guide/routing.html");
});

app.use(userRouter);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
