(function() {
    'use strict';

    angular
        .module('app.schedule',[])
        .controller('ScheduleCtrl', ScheduleCtrl);
        ScheduleCtrl.$inject = ['$state'];

    /* @ngInject */
    function ScheduleCtrl($state) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'ScheduleCtrl';
        vm.danceClassList = [
            {id:1,title:"Hip-Hop with Ishii",batch:"batch-1"},
            {id:2,title:"Jazzfunk with Sherwin",batch:"batch-2"},
            {id:3,title:"K-Pop with Myka",batch:"batch-1"},
            {id:4,title:"Burlesque with Asian Twins",batch:"batch-1"},
            {id:5,title:"Zumba with Ray-an",batch:"batch-2"},
            {id:6,title:"Sexy Hip-Hop with Ritz",batch:"regional"},
            {id:7,title:"Kids Class with Chrissian",batch:"batch-2"},
            {id:8,title:"Lyrical Hip-Hop with Ram",batch:"batch-1"},
            {id:9,title:"Zumba with Grace",batch:"regional"},

        ];
        vm.test = test;
        activate();

        function activate() {

        }
        function test(id){
            $state.go('danceClasses.detail',{id:id});
        }

    }
})();