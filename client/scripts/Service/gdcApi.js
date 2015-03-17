(function() {
    'use strict';

    angular
        .module('app.gdcApi',[])
        .factory('gdcApi', gdcApi);

    /* @ngInject */
    function gdcApi(Restangular) {
        var service = {
            getDanceClasses: getDanceClasses,
            getDanceClass: getDanceClass,
            getTeachers: getTeachers
        };
        return service;

        ////////////////

        function getDanceClasses(){
            return Restangular.service('danceclasses');
        }
        function getDanceClass(danceClassId){
            return Restangular.one('danceclasses',danceClassId);
        }
        function getTeachers(){
            return Restangular.service('teachers');
        }
    }
})();