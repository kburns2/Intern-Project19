const express = require("express");
const router = express.Router();
const data = require("../data");
const thePerson = data.people;

router.get("/", async (req, res) => {
  const idList = req.query.idNum;
  const idNum = await thePerson.getInfoById(idList); //array of lan id's that match query
  
try{
  if(!idList || idList == "") //no lan id that matches
  {
    res.render("posts/BadSwipeError");
    return;
  }
  var resi = idNum[0].reservation; //array of reservations for person
  
  if(idNum[0].reservation[0] == null) //no reservation
  {
    res.render("posts/noRes");
    return;
  }
  else if(resi.length > 1){ // multi reservations
    res.render("posts/search2", { idNum: idNum, idList}); 
  }
  else{ //one reservation
  res.render("posts/search", { idNum: idNum, idList});
  } 
}
catch(e){
  res.render("posts/search", { idNum: idNum, idList});
}
});

module.exports = router;
