(function() {
    'use strict';

    angular
        .module('app.datepicker',[])
        .controller('DatePickerCtrl1', DatePickerCtrl1);

    /* @ngInject */
    function DatePickerCtrl1() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'DatePickerCtrl1';


        vm.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };
        vm.showWeeks = false;
        vm.format = 'shortDate';
        vm.today = today;
        vm.clear = clear;
        vm.toggleMid = toggleMin;
        vm.open = open;

        activate();

        function activate() {
            today();
            toggleMin();
        }
        function today(){
            return vm.dt = new Date();
        }
        function clear(){
            return vm.dt = null;
        }
        function toggleMin(){
            var _ref;
            return vm.minDate = (_ref = vm.minDate) != null ? _ref : {
              "null": new Date()
            };
        }
        function open($event) {
            $event.preventDefault();
            $event.stopPropagation();
            return vm.opened = true;
        }

    }
})();