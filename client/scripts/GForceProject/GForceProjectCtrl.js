(function() {
    'use strict';

    angular
        .module('app.gforceproject',[])
        .controller('GForceProjectCtrl', GForceProjectCtrl);
        GForceProjectCtrl.$inject = ['$state','$scope','$log','$modal','filterFilter','$filter','Restangular','localStorageService','danceClasses'];
    /* @ngInject */
    function GForceProjectCtrl($state,$scope,$log,$modal,filterFilter,$filter,Restangular,localStorageService,danceClasses) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'GForceProjectCtrl';
        var original;
        vm.testdanceclass;
        vm.total = 0;
        vm.classDropDown = false;
        vm.buttonText = 'Add more Class';

        vm.danceClasses = danceClasses;
        // vm.danceClasses;
        // vm.selectedClassID = $stateParams.id;

        vm.danceClassList = [
            {id:1,title:"Hip-Hop with Ishii",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"_gf1QQE-EFA",photo:"ishii",description:"The leader of the G-Force Poppers will take you to a wild ride with her quirky dance moves that are both challenging and fun. Be ready for an electrifying class with Ishii!",price:8500},
            {id:2,title:"Kids Class (8-10) with JB",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"_gf1QQE-EFA",photo:"jb",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:3,title:"Sexy Hip-Hop with Ritz",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"ritz",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:4,title:"K-Pop with Myka",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"myka",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:5,title:"Lyrical Hip-Hop with Ram",batch:"Manila Batch 1",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"ram",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:6,title:"Hip-Hop with Gelai",batch:"Manila Batch 2",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"gelai",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500},
            {id:7,title:"Hip-Hop with Dayrit",batch:"Manila Batch 2",date:"April 13 – 17, 2015",time:"12:00 NN – 2:00 PM",video:"s1ZcQLOi96A",photo:"dayrit",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",price:8500}
        ];

        vm.formData = {
            firstname:'',
            lastname:'',
            address:'',
            email:'',
            cnumber:'',
            birthdate:'',
            danceClass:[

            ],
            glamping:false,
            gender:'male',
        };

        original = angular.copy(vm.formData);
        vm.originalDanceClassList = vm.danceClassList;
        vm.originalSelectedDanceClass = vm.formData.danceClass;
        vm.cancel = cancel;
        vm.agreement = agreement;
        vm.glampingModal = glampingModal;
        vm.canSubmit = canSubmit;
        vm.change = change;
        vm.removeClass = removeClass;
        vm.getlstorage = getlstorage;
        vm.classOnSelect = classOnSelect;
        vm.showClassDropDown = showClassDropDown;


        //search value


        //filter the array
        // var foundItem = $filter('filter')(vm.danceClassList, { id: vm.selectedClassID  }, true)[0];

        // //get the index
        // var index = vm.danceClassList.indexOf(foundItem );

        // console.log("selectedClass",foundItem);
        // console.log("index of selected Class", index);

        vm.batch1 =  $filter('filter')(vm.danceClassList, { batch: 'Manila Batch 1'});
        vm.batch2 =  $filter('filter')(vm.danceClassList, { batch: 'Manila Batch 2'});


        activate();

        function activate() {
            getLocalStorage();
        }
        function cancel(){
            $state.reload();
        }
        function agreement(){
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "termsAndCondition.html",
                controller:'TermsCtrl as vmt',
                size:'lg',
            });

            modalInstance.result.then((function(selectedItem) {
                // console.log("data",vm.formData);
                $state.go('gforceproject-webcam');
            }), function() {
              $log.info("Modal dismissed at: " + new Date());
            });
        }
        function glampingModal(){
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "glampingModal.html",
                controller:'GlampingModalCtrl as glampingModal',
                size:'lg',
            });
        }
        function canSubmit() {
            if (vm.formData.danceClass.length > 0) {
                return vm.form.$valid && !angular.equals(vm.formData, original);
            }
        }
        function change(data){
            vm.formData.birthdate = data;
        }
        function removeClass(id){
            console.log("Remove Class",id);
            localStorageService.remove(id);
            var foundItem2 = $filter('filter')(vm.formData.danceClass, { id: id }, true)[0];
            //get the index
            var index2 = vm.formData.danceClass.indexOf(foundItem2 );
            // var index = getIndex(id);
            vm.formData.danceClass.splice(index2,1);
            // fix this shitty code
            if(vm.total == 0){
                console.log("total is equal to zero");
            }else{
                vm.total = vm.total - 8500;
            }

        }
        function getLocalStorage(){
            vm.localValues = localStorageService.keys();
            var lsLength = localStorageService.length();
            var cvalue,index1;
            for (var i = 0; i < lsLength; i++) {
                console.log("local Value",vm.localValues[i]);
                cvalue = parseInt(vm.localValues[i], 10);
                index1 = getIndex(cvalue);
                // add selected class to array
                vm.formData.danceClass.push(vm.danceClassList[index1]);
            };

        }
        function getIndex(value){
            var foundItem1 = $filter('filter')(vm.danceClassList, { id: value }, true)[0];
            //get the index
            var index1 = vm.danceClassList.indexOf(foundItem1 );
            return index1;
        }
        function getlstorage(){
            return vm.lstorage = localStorageService.keys();
        }
        function classOnSelect(item){
            var classId = item.id;
            localStorageService.set(classId);
            getlstorage();
        }
        function showClassDropDown (){
            vm.classDropDown = true;
        }
    }
})();