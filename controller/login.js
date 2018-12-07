var mongoose = require('mongoose');
var signModel = require('../model/signup');
var issueModel = require('../model/issues');

var logUser=function(req,res){
  	if(req.body.logid=="admin" && req.body.logpass=="admin123"){
      req.session.user = "admin";
      res.redirect('/admin')
    }
    else{
    signModel.findOne({regno:req.body.logid},function(err,user){
  		if(err) throw err;
	      if(user){
	        //bcrypt.compare(req.body.password,user.password,function(err,isMatch) {
	          if(err) throw err;
	          if(user.password==req.body.logpass){
	            var details = {
	              "name" : user.name,
	              "email" : user.email,
	              "phone" : user.phone,
	              "regno" : user.regno,
	              "gender" : user.gender,
	              "amount" : user.amount,
	            };
				req.session.user = details;
				return res.redirect('/home');
  			  }
  			  
  			  return res.redirect('/logsign');
		  }
		return res.redirect('/logsign');
	});
}
};

var issue=function(req,res){
 	issueModel.find({}, function(err, docs) {
	    if (!err){ 
	        console.log(docs);
	    }
	    else {
	    	throw err;
	    }
	    res.render('admin',{users:docs});
	});
};

module.exports = {"logUser":logUser,"issue":issue};
