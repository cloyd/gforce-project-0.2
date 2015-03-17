(function() {
    'use strict';

    angular
        .module('app.danceClass',[])
        .controller('DanceClassesCtrl', DanceClassesCtrl);

        DanceClassesCtrl.$inject = ['$state','$stateParams','gdcApi'];
    /* @ngInject */
    function DanceClassesCtrl($state,$stateParams,gdcApi) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'DanceClassesCtrl';
        var danceClass;
        vm.showinfo = false;
        vm.batch = 'batch-1';

        vm.danceClassList = [
            {id:1,title:"Kids Class (5-7) with Myka",batch:"batch-1",video:"_gf1QQE-EFA",photo:"myka"},
            {id:2,title:"Kids Class (8-10) with JB",batch:"batch-1",video:"_gf1QQE-EFA",photo:"jb"},
            {id:3,title:"Advance Kids and Teens with Ishii",batch:"batch-1",video:"s1ZcQLOi96A",photo:"ishii"},
            {id:4,title:"K-Pop with Myka",batch:"batch-1",video:"s1ZcQLOi96A",photo:"myka"},
            {id:5,title:"Hip-Hop with Gelai",batch:"batch-1",video:"s1ZcQLOi96A",photo:"gelai"},
            {id:6,title:"Lyrcal Hip-Hop with Ram",batch:"batch-1",video:"_gf1QQE-EFA",photo:"ram"},
            {id:7,title:"Hip-Hop with Dayrit",batch:"batch-1",video:"UxM-v1wSkUo",photo:"dayrit"},

            {id:8,title:"Kids Class (5-7) with Chrissian",batch:"batch-2",video:"_gf1QQE-EFA",photo:"chrissian"},
            {id:9,title:"Kids Class (8-10) with Chemne",batch:"batch-2",video:"_gf1QQE-EFA",photo:"cheme"},
            {id:10,title:"Advance Kids with Ishii",batch:"batch-2",video:"s1ZcQLOi96A",photo:"ishii"},
            {id:10,title:"Hip-Hop with Poppers",batch:"batch-2",video:"s1ZcQLOi96A",photo:"poppers"},
            {id:10,title:"Hip-Hop with Jim",batch:"batch-2",video:"s1ZcQLOi96A",photo:"jim"},
            {id:10,title:"Lyrical Hip-Hop with Ram",batch:"batch-2",video:"s1ZcQLOi96A",photo:"ram"},
            {id:10,title:"Sexy Hip-Hop with Ritz",batch:"batch-2",video:"s1ZcQLOi96A",photo:"ritz"},

        ];


        // vm.classVid = 's1ZcQLOi96A';
        vm.classVid = {
            video: '_gf1QQE-EFA',
            player: null,
            vars: {
                // autoplay: 1,
                controls: 0
            }
        };

        vm.select = select;
        vm.selectBatch = selectBatch;

        activate();

        function activate() {
            // getDanceClasses();
            console.log(vm.batch);
        }

        function select(id){
            getDanceClass(id);
            vm.showinfo = true;
            vm.classVid.video = vm.danceClass.video;
            $state.go('danceClasses.detail',{id:id});
        }
        function selectBatch(batch){
            vm.batch = batch;
            console.log("batch selected",vm.batch);
        }
        function getDanceClasses(){
            return gdcApi.getDanceClasses().getList().then(function(data){
              return vm.danceClasses = data;
            });
        }
        function getDanceClass(id){
            vm.danceClass = _.find(vm.danceClassList, function(danceClass)
            {
                return danceClass.id === id;
            });
        }
    }
})();