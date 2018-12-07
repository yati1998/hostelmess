var mongoose = require('mongoose');
var signModel = require('../model/signup');

var signUser=function(req,res){
		var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		d=curr_date-1 + "-" + m_names[curr_month] + "-" + curr_year;
		var s=" ";
		var signmodel = new signModel({
			name:req.body.name,
			email:req.body.email,
			phone:req.body.phone,
			regno:req.body.regno,
			password:req.body.password,
			gender:req.body.gender,
			amount:10500,
			date:d,
			cdates:s,
			bcount:0,
			lcount:0,
			dcount:0
		});
		// var pw = signmodel.password;
		// var saltRounds = 10;
		// var hash = bcrypt.hashSync(pw, saltRounds);
		// signmodel.password = hash;
		signmodel.save(function(err,doc){
			if(err) res.render('logsign',{msg:'alert("Credentials already exists..!!")'})
			res.render('logsign',{msg:'alert("Registered Successfully..!!")'})
		});
};

module.exports = {"signUser":signUser};