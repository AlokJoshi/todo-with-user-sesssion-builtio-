var app = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com').persistSessionWith(Built.Session.LOCAL_STORAGE);
var user = app.User;
var query = app.Class('project').Query();
var TODO = app.Class('project').Object;
var todo = angular.module('todo', []);

todo.controller('todolistctrl', function($scope) {  

    $scope.val = true;
    $scope.todolist = [];
$scope.load=function(){

    $scope.todolist = [];
    user.getSession()
        .then(function(user) {

            console.log(user.data.email);
            $scope.username=user.data.email;
            $scope.$apply();
            query
                .where('app_user_object_uid', user.data.uid)

            .toJSON()
                .exec()
                .then(function(objects) {
                    for (var i = 0; i < objects.length; i++) {
                        console.log(objects[i].uid);
                        $scope.todolist.push({
                            uid:objects[i].uid,
                            name: objects[i].name,
                            done: objects[i].done
                        });
                       

                        console.log($scope.todolist);
                        //$scope.todolist.push({name : newtodo,done:h});
                        $scope.$apply();
                    }
                })


        });
}


    //for checked attribute
    $scope.checkstrike = function(item, done) {

        console.log(item.uid);

        user.getSession()
            .then(function(user) {

                console.log(user.data.uid);
                var todoupdate = TODO({

                    done: done
                }); //update value
                todoupdate = todoupdate.upsert({
                    uid: item.uid
                }); // current value
                todoupdate.save()
                    .then(function() {
                            alert('updated');
                        },
                        function() {
                            alert("error");
                        }
                );
            })
    };




    //end  checked attribute
    //start of enter
    $scope.enter = function(event) {
        if (event.which === 13) {
            var newtodo = $scope.addtodo;
            $scope.addtodo = null;
            if (newtodo != null) {
                //                $scope.addtodo = null;
                //              $scope.todolist.push(newtodo);
                user.getSession()
                    .then(function() {
                        var ProjectClass = app.Class('project').Object;
                        ProjectClass({

                            name: newtodo,
                            done: false
                        })
                            .save()
                            .then(function(data) {
                                   
                                    $scope.load();
                                    
                                },
                                function(err) {
                                    alert("errro");
                                });

                    });

            };
        };
        console.log($scope.todolist);
    };

    //end of enter
    $scope.removetodo = function(item) {
        alert(item.name);
        var index = $scope.todolist.indexOf(item);
        user.getSession()
            .then(function(user) {
               
                TODO({uid:item.uid})
                .delete()
                .then(function(user){
console.log(user);
 $scope.todolist.splice(index, 1);
 $scope.$apply();

                })



            })
        
    };

    var curr_user;
    $scope.edit = function(edit) {
        curr_user = edit;
        this.val = false;
    };
    //start todo edit
    $scope.todoedit = function(event, item) {
        if (event.which === 13) {
            if (item != "") {
                user.getSession()
                    .then(function(user) {

                        var todoupdate = TODO({
                            name: item.name
                        }); //update value
                        todoupdate = todoupdate.upsert({

                            uid: item.uid
                        }); // current value
                        todoupdate.save()
                            .then(function(todoupdate) {
                                    alert('updated');
                                },
                                function(todoupdate) {
                                    alert("error");

                                }
                        );


                        var index = $scope.todolist.indexOf(curr_user);

                    })
                this.val = true;
            };
        };

    };
    //end todo edit

    $scope.logout=function(){
alert("logout called");
            user().logout().
            then(function(user){
                window.location="login.html"
alert("logged out")
  // do something here
});
    }
});









//logi controller
todo.controller('loginctrl', function($scope) {
    $scope.login = function() {



        var email = $scope.email;
        var password = $scope.password;
        user().login(email, password)

        .then(function(user) {


                window.location = "todo.html";
                console.log('Logged In')
                console.log(user.isAuthenticated())
                
            },
            function() {
                alert("wrong username or password");

            })
        $scope.email = "";
        $scope.password = "";
    };


    $scope.newuser = function() {
        window.location = "register.html";
    };
});



//register controller


todo.controller('registerctrl', function($scope) {
    $scope.register = function() {
        var app = Built.App('blt01972bd836b97c65').setHost('code-bltdev.cloudthis.com').User();
        var email = $scope.email;
        var password = $scope.password;
        var password_confirm = $scope.cnfpassword;

        app.register(email, password, password_confirm)
            .then(function() {
                    alert("success");
                    window.location = "login.html";
                },
                function() {
                    alert("error");
                })

    };

    $scope.login = function() {
        window.location = "login.html";
    }
});