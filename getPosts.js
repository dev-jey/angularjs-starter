posts.factory('getService', ($http) => {
    return {
        getItems: ($scope) => {
            $http.get('https://jsonplaceholder.typicode.com/posts').then((posts) => {
                $scope.posts = posts.data;
            }, (error) => {
                $scope.error = error.data
            })
        }
    }
})