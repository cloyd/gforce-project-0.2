(function() {
    'use strict';

    angular
        .module('app.test',[])
        .controller('TestCtrl', TestCtrl);

    /* @ngInject */
    function TestCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'TestCtrl';

        vm.danceClassList = [
            {id:1,title:"Hip-Hop with Ishii",day:"Monday"},
            {id:2,title:"Jazzfunk with Sherwin",day:"Tuesday"},
            {id:3,title:"K-Pop with Myka",day:"Monday"},
            {id:4,title:"Burlesque with Asian Twins",day:"Monday"},
            {id:5,title:"Zumba with Ray-an",day:"Wednesday"},
            {id:6,title:"Sexy Hip-Hop with Ritz",day:"Friday"},
            {id:7,title:"Kids Class with Chrissian",day:"Saturday"},
            {id:8,title:"Lyrical Hip-Hop with Ram",day:"Thursday"},
            {id:9,title:"Zumba with Grace",day:"Wednesday"}
        ];
        vm.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', active: true },
            { title:'Dynamic Title 3', content:'Dynamic content 3', disabled: true }
        ];

        activate();

        function activate() {
        }
    }
})();