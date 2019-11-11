
var myApp = angular
    .module("myModule", [])
    .controller("myController", ($scope) => {
        const country = {
            name: "Kenya",
            capital: "Nairobi",
            flag: "images/kenya.jpeg"
        }
        $scope.country = country
        $scope.message = "Angular Js in Action"
    })
    .controller("techController", ($scope)=>{
    
        const technologies = [
            {name: "C#", likes:0, dislikes: 0},
            {name: "Java", likes:0, dislikes: 0},
            {name: "Python", likes:0, dislikes: 0},
            {name: "C++", likes:0, dislikes: 0},
            {name: "C", likes:0, dislikes: 0},
            {name: "Go", likes:0, dislikes: 0}
        ]
        $scope.technologies = technologies;
        $scope.incrementLikes = ((technology) => {
            technology.likes++
        });
        $scope.decrementLikes = ((technology) => {
            technology.dislikes++
        });
    })