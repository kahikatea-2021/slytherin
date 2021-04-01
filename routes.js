const express = require("express");
const router = express.Router();
module.exports = router;
const db = require("./db");

router.get("/", (req, res) => {
  res.render("index");
});

//
router.post("/", (req, res) => {
  const translated = db.parselTongue(req.body.translate);
  const viewData = {
    name: req.body.name,
    message: translated,
  };
  console.log(viewData);
  // .then(() => {
  //   return db.addHistoryItem(viewData);
  // })
  // .then(() => {
  //   res.redirect("/translated", translated);
  // });
});

//router.get("/translated", (req, res) => {});
