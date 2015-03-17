(function() {
    'use strict';

    angular
        .module('app.webcam',[])
        .controller('WebcamCtrl', WebcamCtrl);

    /* @ngInject */
    WebcamCtrl.$inject = ['$scope'];
    function WebcamCtrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'WebcamCtrl';
        $scope.video = 'thisvideo';

        activate();

        function activate() {
        }
    }
})();