(function() {
    'use strict';

    angular
        .module('app.gfdanceClass',[])
        .controller('GFDanceClassesCtrl', GFDanceClassesCtrl);

        GFDanceClassesCtrl.$inject = ['$state','$stateParams','$modal','$log','localStorageService','gfpAPI','danceClasses'];
    /* @ngInject */
    function GFDanceClassesCtrl($state,$stateParams,$modal,$log,localStorageService,gfpAPI,danceClasses) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'GFDanceClassesCtrl';
        vm.danceClassList = [
            {id:1,title:"Hip-Hop with Ishii",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"_gf1QQE-EFA",photo:"ishii",description:"The leader of the G-Force Poppers will take you to a wild ride with her quirky dance moves that are both challenging and fun. Be ready for an electrifying class with Ishii!",price:8500},
            {id:2,title:"Kids Class (8-10) with JB",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"_gf1QQE-EFA",photo:"jb",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:3,title:"Sexy Hip-Hop with Ritz",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"ritz",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:4,title:"K-Pop with Myka",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"myka",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:5,title:"Lyrical Hip-Hop with Ram",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"ram",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:6,title:"Hip-Hop with Gelai",batch:"Manila Batch 2",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"gelai",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:7,title:"Hip-Hop with Dayrit",batch:"Manila Batch 2",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"dayrit",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500}
        ];

        activate();

        function activate() {
          vm.danceClasses = danceClasses;
        }
        vm.open = function (testid) {
            var classId = testid;
            var modalInstance = $modal.open({
              templateUrl: 'classModal.html',
              controller: 'GFDanceClassModalCtrl as vmt',
              size:'lg',
              resolve: {
                classId: function() {
                  return classId;
                }
              }
            });

            modalInstance.result.then(function (selectedItem) {
              vm.selected = selectedItem;
              // console.log("vm.selected",vm.selected);
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
        }
        vm.addToLocalStorage = function(id,cl){
          localStorageService.set(id, cl);
          vm.getLocalStorage();
        }
        vm.getLocalStorage = function(){
          // Read that value back
          vm.localValues = localStorageService.keys();
          vm.localStorageLength = localStorageService.length();
        }

        vm.clearLocalStorage = function(){
          localStorageService.clearAll();
          vm.getLocalStorage();
        }
    }

})();