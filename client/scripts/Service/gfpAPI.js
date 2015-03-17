(function() {
    'use strict';

    angular
        .module('app.gfpAPI',[])
        .factory('gfdAPI', gfdAPI);

    /* @ngInject */
    function gfdAPI(Restangular) {
        var service = {
            getDanceClasses: getDanceClasses,
            getDanceClass: getDanceClass,
            getDanceStyles: getDanceStyles,
            getTeachers: getTeachers,
            getVenues: getVenues
        };
        return service;

        ////////////////

        function getDanceClasses(){
            return Restangular.service('danceclasses');
        }
        function getDanceClass(danceClassId){
            return Restangular.one('danceclasses',danceClassId);
        }
        function getDanceStyles(){
            return Restangular.service('dancestyles');
        }
        function getTeachers(){
            return Restangular.service('teachers');
        }
        function getVenues(){
            return Restangular.service('venues');
        }
    }
})();