
var myApp = angular
    .module("myModule", ['employeesModule'])
    .controller("myController", ($scope) => {
        const country = {
            name: "Kenya",
            capital: "Nairobi",
            flag: "images/kenya.jpeg"
        }
        $scope.country = country
        $scope.message = "Angular Js in Action"
    })
    .controller("techController", ($scope) => {

        const technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "Java", likes: 0, dislikes: 0 },
            { name: "Python", likes: 0, dislikes: 0 },
            { name: "C++", likes: 0, dislikes: 0 },
            { name: "C", likes: 0, dislikes: 0 },
            { name: "Go", likes: 0, dislikes: 0 }
        ]
        $scope.technologies = technologies;
        $scope.incrementLikes = ((technology) => {
            technology.likes++
        });
        $scope.decrementLikes = ((technology) => {
            technology.dislikes++
        });
    })
var employeesModule = angular.module("employeesModule", [])
    .controller("myEmployees", ($scope) => {
        $scope.employees = [
            { name: "Jemo", dateOfBirth: new Date("November 05, 1996"), gender: "Male", salary: 50000.904 },
            { name: "Kituku", dateOfBirth: new Date("December 21, 1991"), gender: "Female", salary: 90000 },
            { name: "Savali", dateOfBirth: new Date("March 09, 1990"), gender: "Male", salary: 400000.0 },
            { name: "Jemo", dateOfBirth: new Date("October 01, 1987"), gender: "Male", salary: 210000 }
        ]
        $scope.rowLimit = 1;
    })