/**
 * Created by reidbelton on 11/10/14.
 */
angular.module("myApp", ["ngRoute"])
   .run(function ($rootScope) {

   })
   .controller("mainCtrl", function ($scope) {
      //$scope.$on('paneChanged', function(event, args) {
      //   console.log("paneChanged\n  EVENT: " + event + "\n  ARGS: " + args);
      //   $scope.paneTitle = args.paneTitle;
      //});
   }).config(function ($routeProvider) {
      $routeProvider.when("/customers", {
         templateUrl: "Views/customers.html"
      });

      $routeProvider.when("/inspectors", {
         templateUrl: "Views/inspectors.html"
      });

      $routeProvider.when("/equipment", {
         templateUrl: "Views/equipment.html"
      });

      $routeProvider.when("/about", {
         templateUrl: "Views/about.html"
      });

      $routeProvider.when("/support", {
         templateUrl: "http://www.hq.ridgid.com"
      });

      $routeProvider.otherwise({
         templateUrl: "Views/equipment.html"
      });
   });