//set boolean 
//   var Person = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com').Class('project').Object;
// var person  = Person({name:'pal',done:true});	           //update value
// person      = person.upsert({ name:'pal',done:false});    // current value
// person.save()
// .then(function(person){ 
// 		alert('updated');
// },
// function(person){
// 	alert("kjg");
// }
// );






//update
// var Person = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com').Class('project').Object;
// var person  = Person({name:'RAHUL123'});	           //update value
// person      = person.upsert({ name:'rahul'});    // current value
// person.save()
// .then(function(person){ 
// 		alert('updated');
// },
// function(person){
// 	alert("kjg");
// }
// );




//delete object

// var app = Built.App(' blt01972bd836b97c65 ').setHost('code-bltdev.cloudthis.com').Class('project').Object('blt845e03e0fec02a07'); 
// app.delete()
//   .then(function(){
//   alert("deleted");
//   });
  


//retrieve objects
 // var query   = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com').Class('built_io_application_user').Query();
 //  query
 //    .toJSON()
 //    .exec()
 //    .then(function(objects){
 //        console.log(objects); 
 //    });








//login
// var app = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com');
// var user = app.User
// user().login('rahul.pal@raweng.com', 'rahulpal')
// .then(function (result) {
// 	console.log('Logged In')
// 	console.log(user.isAuthenticated())
// }, console.error)








// //registering new user
// var app = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com').User();
// var email="rahul.pal@raweng.com";
// var password="rahulpal";
// var password_confirm="rahulpal";
// app.register(email, password, password_confirm)






//save details
// var app=Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com')
//  var ProjectClass = app.Class('project').Object;               
//  ProjectClass({
//     name : 'Abc',
//     description : 'das'
//   })
//  .save()
//  .then(function(data){
//     alert("saved");
//   },
//   function(err){
//   	alert("errro");
//   });
//