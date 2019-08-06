const express = require("express");
const router = express.Router();
const data = require("../data");
const thePerson = data.people;

router.get("/", async (req, res) => {
  const resList = req.query.tester;
  const resInfo = await thePerson.getReservationInfoByNumber(resList); //array of res data
try{
  if(!resInfo || resInfo == "") //no reservation that matches
  {
    res.render("posts/CiError");
    return;
  }
  else{
  res.render("posts/CScreen", {resInfo: resInfo, resList}); 
  }
}
catch(e){
  console.log("error");
}
});

module.exports = router;