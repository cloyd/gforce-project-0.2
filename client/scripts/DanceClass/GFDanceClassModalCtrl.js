(function() {
    'use strict';

    angular
        .module('app.gfdanceClassModal',[])
        .controller('GFDanceClassModalCtrl', GFDanceClassModalCtrl);
        GFDanceClassModalCtrl.$inject = ['$modalInstance','$scope','$state','classId','localStorageService'];
    /* @ngInject */
    function GFDanceClassModalCtrl($modalInstance,$scope,$state,classId,localStorageService) {
        /*jshint validthis: true */
        var vmt = this;
        vmt.title = 'GFDanceClassModalCtrl';
        vmt.ok = ok;
        vmt.dismiss = dismiss;

        vmt.selectedClass = classId;
        vmt.classVid = {
            video: 's1ZcQLOi96A',
            player: null,
            vars: {
                // autoplay: 1,
                controls: 0
            }
        }

        activate();

        function activate() {
            // console.log("class ID", classId);
        }
        function ok(){
            // $modalInstance.close();
            $modalInstance.close(classId);
            addToLocalStorage(classId.id);
            $state.go('gforceproject-enrollmentForm');
        }
        function dismiss(){
            $modalInstance.dismiss("cancel");
        }
        function addToLocalStorage(classId){
          localStorageService.set(classId);
        }
    }
})();