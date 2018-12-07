var mongoose = require('mongoose');
var issueModel = require('../model/issues');

var issueSave = (req,res) => {
  if (req.session.user.gender=="Male") {
    hostel="RHR"
  }
  else{
    hostel="KCHR"
  }
  // console.log(req.session.user);
  // console.log(req.body);
  var details = {
    regno: req.session.user.regno,
    type: req.body.type,
    date: Date.now(),
    description: req.body.description
  }
  var issuemodel = new issueModel(details);
  issuemodel.save(function(err,doc){
      if(err) res.render('issues', {hos:hostel, msg:'alert("Please fill all the details.")'});
      res.render('issues', {hos:hostel, msg:'alert("Your complaint has been received")'});
    });
};

module.exports = {"issueSave":issueSave};
