(function() {
    'use strict';

    angular
        .module('app.enrollment',[])
        .controller('EnrollmentCtrl', EnrollmentCtrl);
        EnrollmentCtrl.$inject = ['$state','$log','$modal','filterFilter'];
    /* @ngInject */
    function EnrollmentCtrl($state,$log,$modal,filterFilter) {
        /*jshint validthis: true */
        var vm = this;
        var original;
        vm.title = 'EnrollmentCtrl ';
        vm.danceClassList = [
           {id:1,title:"Kids Class (5-7) with Myka",batch:"batch-1",video:"_gf1QQE-EFA"},
            {id:2,title:"Kids Class (8-10) with JB",batch:"batch-1",video:"_gf1QQE-EFA"},
            {id:3,title:"Advance Kids and Teens with Ishii",batch:"batch-1",video:"s1ZcQLOi96A"},
            {id:4,title:"K-Pop with Myka",batch:"batch-1",video:"s1ZcQLOi96A"},
            {id:5,title:"Hip-Hop with Gelai",batch:"batch-1",video:"s1ZcQLOi96A"},
            {id:6,title:"Lyrcal Hip-Hop with Ram",batch:"batch-1",video:"_gf1QQE-EFA"},
            {id:7,title:"Hip-Hop with Dayrit",batch:"batch-1",video:"UxM-v1wSkUo"},
            {id:8,title:"Hip-Hop with Ishii",batch:"batch-1",video:"UxM-v1wSkUo"},

            {id:8,title:"Kids Class (5-7) with Chrissian",batch:"batch-2",video:"_gf1QQE-EFA"},
            {id:9,title:"Kids Class (8-10) with Chemne",batch:"batch-2",video:"_gf1QQE-EFA"},
            {id:10,title:"Advance Kids with Ishii",batch:"batch-2",video:"s1ZcQLOi96A"},
            {id:10,title:"Hip-Hop with Poppers",batch:"batch-2",video:"s1ZcQLOi96A"},
            {id:10,title:"Hip-Hop with Jim",batch:"batch-2",video:"_gf1QQE-EFA"},
            {id:10,title:"Lyrical Hip-Hop with Ram",batch:"batch-2",video:"s1ZcQLOi96A"},
            {id:10,title:"Sexy Hip-Hop with Ritz",batch:"batch-2",video:"s1ZcQLOi96A"},
        ];
        vm.formData = {
            firstname:'',
            lastname:'',
            address:'',
            email:'',
            cnumber:'',
            birthdate:'',
            danceClass:[],
            camp:false,
            gender:'male',
            batch1:false,
            batch2:false
        };
        original = angular.copy(vm.formData);
        vm.originalDanceClassList = vm.danceClassList;

        vm.cancel = cancel;
        vm.enroll = enroll;
        vm.agreement = agreement;
        vm.selectBatch1 = selectBatch1;
        vm.selectBatch2 = selectBatch2;
        vm.canSubmit = canSubmit;
        vm.change = change;
        activate();

        function activate() {

        }
        function cancel(){
            $state.reload();
        }
        function enroll(){
            alert("BABAM!");
        }
        function agreement(){
            console.log();
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "termsAndCondition.html",
                controller:'TermsCtrl as vmt',
                size:'lg',
            });

            modalInstance.result.then((function(selectedItem) {
                console.log("data",vm.formData);
                $state.go('welcome');
            }), function() {
              $log.info("Modal dismissed at: " + new Date());
            });
        }
        function selectBatch1(){
            vm.danceClassList = filterFilter(vm.danceClassList,'batch-1');
            if (!vm.formData.batch1){
                return vm.danceClassList = vm.originalDanceClassList;
            }
            if(vm.formData.batch1 && vm.formData.batch2){
                return vm.danceClassList = vm.originalDanceClassList;
            }
        }
        function selectBatch2(){
            vm.danceClassList = filterFilter(vm.danceClassList,'batch-2');
            if (!vm.formData.batch2){
                return vm.danceClassList = vm.originalDanceClassList;
            }
            if(vm.formData.batch1 && vm.formData.batch2){
                return vm.danceClassList = vm.originalDanceClassList;
            }
        }
        function canSubmit() {
            if (vm.formData.danceClass.length > 0) {
                return vm.form.$valid && !angular.equals(vm.formData, original);
            }
        }
        function change(data){
            vm.formData.birthdate = data;
        }
    }
})();