var express = require('express');
var router = express.Router();
var signup = require('../controller/signup');
var login = require('../controller/login');
var cancel = require('../controller/cancel');
var issue = require('../controller/issues');
/* GET home page. */


router.post('/signup',signup.signUser);

router.post('/login',login.logUser);

router.post('/cancel',cancel.cancelAmount);

router.post('/issues', issue.issueSave);

router.post('/admin',login.issue);

router.post('/fmealcounts',cancel.fcount);

router.post('/mmealcounts',cancel.mcount);

router.get('/profile',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
	console.log("haha="+req.session.user);
	res.render('profile',{hos:hostel,pro:req.session.user});
	};
});

router.get('/mealcounts',function(req,res){
	res.render('mealcounts',{counts:null});
});

router.get('/',function(req,res){
	res.redirect('/home')
});

router.get('/admin', function(req,res){
	var data=req.session.data;
	console.log("data="+req.session.data);
	res.render('admin',{"users":data});
});

router.get('/mealcount',function(req,res){
	
});

router.get('/logsign',function(req, res, next) {
	if (req.session.user) {
   		res.redirect('/home');
	} 	
	else
		res.render('logsign',{msg:'alert("Oops!Something went wrong.Please check your credentials!")'});
});

router.get('/home',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
		var mes=req.session.mes;
		var bs1=req.session.bs;
		var ls1=req.session.ls;
		var ds1=req.session.ds;
		req.session.mes=null;
        res.render('home', {details:msg,hos:hostel,mes:mes,bs:bs1,ls:ls1,ds:ds1});
} else res.redirect("/logsign");
});

router.get('/issues',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
        res.render('issues', {msg:"",details:msg,hos:hostel});
} else res.redirect("/logsign");
});

router.get('/contacts',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
        res.render('contacts', {details:msg,hos:hostel});
} else res.redirect("/logsign");
});

router.get('/logout',function(req, res, next) {
	req.session.user=null;
	req.session.mes=null;
	res.render("logsign",{msg:""});
});

module.exports = router;
