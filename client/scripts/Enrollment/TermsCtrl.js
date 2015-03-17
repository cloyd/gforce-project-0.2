(function() {
    'use strict';

    angular
        .module('app.terms',[])
        .controller('TermsCtrl', TermsCtrl);
        TermsCtrl.$inject = ['$modalInstance','$scope'];
    /* @ngInject */
    function TermsCtrl($modalInstance,$scope) {
        /*jshint validthis: true */
        var vmt = this;
        vmt.title = 'TermsCtrl';
        vmt.ok = ok;
        vmt.dismiss = dismiss;

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