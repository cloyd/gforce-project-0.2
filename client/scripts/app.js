(function() {
  'use strict';
  angular.module('app', ['ui.router','restangular','angular.filter', 'ngAnimate', 'ui.bootstrap', 'youtube-embed','ui.select',

    'webcam','gilbox.kineticSlider','ngMap','LocalStorageModule','xeditable',

    'easypiechart', 'textAngular', 'ui.tree','ngTagsInput', 'angular-loading-bar', 'app.controllers', 'app.directives', 'app.nav', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.ui.map', 'app.form.validation', 'app.ui.form.ctrls', 'app.ui.form.directives', 'app.tables', 'app.task', 'app.chart.ctrls', 'app.chart.directives', 'app.page.ctrls',
    // custom modules
    'app.gfpAPI',
    'app.schedule','app.danceClass','app.enrollment','app.test','app.terms','app.datepicker','app.gforceproject','app.webcam','app.glampingModal',

    'app.gfdanceClass','app.gfdanceClassModal'
    ])

  .config(function($stateProvider,$urlRouterProvider,uiSelectConfig,RestangularProvider,localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('gf');
    uiSelectConfig.theme = 'select2';
    // uiSelectConfig.theme = 'selectize';

    // uiSelectConfig.resetSearchInput = true;
    RestangularProvider.setBaseUrl('http://gforceproject-api-0.2:8888/public/api/v1/');
    RestangularProvider.setDefaultHttpFields({cache: true});
     RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
          var extractedData;
          // .. to look for getList operations
          if (operation === "getList" || operation === "get") {
            // .. and handle the data and meta data
            extractedData = data.data;
          }
          else {
            extractedData = data;
          }
          return extractedData;
      });

    // uiSelectConfig.theme = 'bootstrap';

    // Routing
    $stateProvider
      .state('gforceproject',{
          url: "/gforceproject",
          templateUrl: "views/gforceproject/welcome.html"
      })
      .state('gforceproject-enrollmentForm',{
          url: "/gforceproject/enrollmentForm",
          templateUrl: "views/gforceproject/enrollmentForm.html",
          controller:"GForceProjectCtrl",
          controllerAs:"vm",
          resolve:{
            danceClasses: function(gfpAPI){
              return gfpAPI.getDanceClasses().getList()
            },
            formData: function(){
              return {
                  firstname:'John',
                  lastname:'Doe',
                  address:'',
                  email:'',
                  cnumber:'',
                  birthdate:'',
                  danceClass:[

                  ],
                  glamping:false,
                  gender:'male',
              }
            }
          }

      })
      .state('gforceproject-danceClasses',{
        url: "/gforceproject/danceClasses",
        templateUrl: "views/gforceproject/danceClasses/danceClasses.html",
        controller:"GFDanceClassesCtrl",
        controllerAs:"vm",
        resolve:{
          danceClasses:function(gfpAPI){
            return gfpAPI.getDanceClasses().getList()
          }
        }
      })
      .state('gforceproject-webcam',{
          url: "/gforceproject/webcam",
          templateUrl: "views/gforceproject/webcam.html",
          controller: "WebcamCtrl",
          controllerAs: "vm"
      })
      .state('gforceproject-summary',{
          url: "/gforceproject/summary",
          templateUrl: "views/gforceproject/summary.html",
          // seperate this controller later
          controller: function(){
            var vm = this;
             vm.formData = {
                firstname:'John',
                lastname:'Doe',
                address:'somewhere',
                email:'generic@gmail.com',
                cnumber:'0999999',
                gender:'male',
                birthdate:'',
                danceClass:[
                ],
                glamping:false,

            };
          },
          controllerAs:"vm"
      })
      .state('gforceproject-thankyou',{
          url: "/gforceproject/thankyou",
          templateUrl: "views/gforceproject/thankyou.html"
      })






      .state('enrollment',{
        url: "/enrollment",
        templateUrl: "views/enrollment/enrollmentForm.html",
        controller:"EnrollmentCtrl",
        controllerAs:"vm"
      })
      .state('danceClasses',{
        url: "/dance-classes",
        templateUrl: "views/danceClasses/danceClasses.html",
        controller: "DanceClassesCtrl",
        controllerAs: "vm"
      })
      .state('danceClasses.detail',{
        url: "/dance-class-detail/:id",
        templateUrl: "views/danceClasses/danceClassesDetail.html",
        controllerAs:"vm"
        // controller: function($stateParams){
        //   var vm = this;
        //   // console.log($stateParams.id);
        //   console.log("classes",vm.danceClassList);
        // }
      })
      .state('schedule',{
        url: "/schedule",
        templateUrl: "views/schedule/schedule.html",
        controller:"ScheduleCtrl",
        controllerAs:"vm"
      })
      .state('schedule.detail',{
        url: "/detail/:batch",
        templateUrl: "views/schedule/scheduleDetail.html",
        controller: function ($stateParams) {
          var svm = this;
          return svm.batch = $stateParams;
        },
        controllerAs:"svm"
      })
      .state('camp',{
        url: "/camp",
        templateUrl: "views/camp/map.html"
      })
      .state('rates',{
        url: "/rates",
        templateUrl: "views/rates/rates.html"
      })
      .state('apparel',{
        url: "/apparel",
        templateUrl: "views/apparel/apparel.html"
      })
      .state('about',{
        url: "/about",
        // separate this controller later
        templateUrl: "views/about.html",
        controller: function(localStorageService){
          localStorageService.clearAll();
          console.log(localStorageService.keys());
        }
      })
      .state('welcome',{
        url: "/welcome",
        templateUrl: "views/welcome.html"
      })
      .state('tasks', {
        url: "/tasks",
        templateUrl: "views/tasks/tasks.html"
      })
      .state('test', {
          url: "/test",
          templateUrl: "views/test/testpage.html",
          controller:"TestCtrl",
          controllerAs:"vm"
      })
      .state('testCamera', {
          url: "/test-camera",
          templateUrl: "views/test/camera.html"
      })
      .state('testform', {
          url: "/testform",
          templateUrl: "views/test/testpage2.html"
      });
      $urlRouterProvider.otherwise('/dance-classes');
  })
  .run(function(editableOptions){
    editableOptions.theme = 'bs3';
  });
})();
