

var myapp = angular.module("myapp", ['ngRoute'])

//router config
myapp.config(($routeProvider)=>{
    $routeProvider
    .when("/home", {
        templateUrl: './home.html',
        controller: "homeCtrl"
    })
    .when("/json", {
        templateUrl: './json.html',
        controller:'jsonCtrl'
    })
    .when("/search", {
        templateUrl: './search.html',
        controller: "searchCtrl"
    })
})

//controllers
myapp.controller("myappCtrl", ($rootScope, $http)=>{
    //retrieve JSON file
    $http.get("./clothing.json")
    .success(function(response){
        $rootScope.clothing = response
        console.log("clothing.JSON retrieved.")
    })
})

myapp.controller("homeCtrl", function($scope, $rootScope){
    $rootScope.var = "Latest Arrivals"
    $scope.message = "Click on search or Json to view"
})
myapp.controller("jsonCtrl",function($scope,$rootScope, $http)
{
    $rootScope.var = "Clothing Details"
    //retrieve JSON file
    $http.get("./clothing.json")
    .success(function(response){
        $rootScope.clothing = response
        console.log("clothing.JSON retrieved.")
    })
})
myapp.controller("searchCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search Cloth"
    $scope.message = "Search cloth by name:"

    search_name = document.getElementById("search_name")
    search_name.addEventListener('keyup', ()=>{
        if(search_name.value.trim() == "")
        {
            document.getElementById("search_table").style.display = "none"
        }
        else
        {
            document.getElementById("search_table").style.display = "table"
        }
    })
})