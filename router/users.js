const express = require("express");
const router = express.Router();

let users = [
   { id: 1, name: "Hannan", email: "hannan@gmail.com" },
   { id: 2, name: "REza", email: "reza@gmail.com" },
];

router
   .route("/users")
   .get((req, res) => {
      res.send(users);
   })
   .post((req, res) => {
      users.push(req.body);
      res.send(req.body);
   });

router.put("/users/:id", (req, res) => {
   const id = req.params.id;
   users.filter((user) => {
      if (user.id == id) {
         user.id = id;
         user.name = req.body.name;
         user.email = req.body.email;

         return user;
      }
   });
   res.json(users);
});

router.delete("/users/:id", (req, res) => {
   let id = req.params.id;
   users = users.filter((user) => user.id != id);
   res.send(users);
});

module.exports = router;
