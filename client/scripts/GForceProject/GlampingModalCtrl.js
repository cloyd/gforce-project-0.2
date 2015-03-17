(function() {
    'use strict';

    angular
        .module('app.glampingModal',[])
        .controller('GlampingModalCtrl', GlampingModalCtrl);
        GlampingModalCtrl.$inject = ['$modalInstance','$scope'];
    /* @ngInject */
    function GlampingModalCtrl($modalInstance,$scope) {
        /*jshint validthis: true */
        var glampingModal = this;
        glampingModal.title = 'GlampingModalCtrl';
        glampingModal.ok = ok;
        glampingModal.dismiss = dismiss;

        activate();

        function activate() {
            console.log("termscontroller loaded succesfully!");
        }
        function ok(){
            $modalInstance.close();
        }
        function dismiss(){
            $modalInstance.dismiss("cancel");
        }
    }
})();