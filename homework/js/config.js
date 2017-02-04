/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("mapp")
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state("home",{
                url: "/home",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state("SignIn",{
                url: "/SignIn",
                templateUrl: "views/Signin.html"
            })
            .state("register",{
                url: "/register",
                templateUrl: "views/register.html"
            })
            .state("news",{
                url: "/news",
                templateUrl: "views/news.html",
                controller: "home"
            })
            .state("news2",{
                url: "/news2",
                templateUrl: "views/news2.html"
            })
        $urlRouterProvider
            .otherwise("home")
    }]);
