const express = require("express");
const router = express.Router();
const data = require("../data");
const thePerson = data.people;

router.get("/", async (req, res) => {
try{
  res.render("posts/noRes"); 
}
catch(e){
  console.log("error");
}
});

module.exports = router;