/**
 * Created by reidbelton on 11/7/14.
 */

angular.module("myApp")
   .controller("navCtrl", function ($scope, $rootScope) {

      $scope.paneButtons = [
         {title: "Equipment", link: "#/equipment", toggled: true},
         {title: "Customers", link: "#/customers", toggled: false},
         {title: "Inspectors", link: "#/inspectors", toggled: false},
      ];

      $scope.selectedButton = $scope.paneButtons[0];

      $scope.supportButtons = [
         {title: "About", link: "#/about"},
         {title: "Support Page", link: "http://hq.ridgid.com/"},
         {title: "Contact Support", link: "mailto:reid.belton@seescan.com"}
      ];

      $scope.toggleButton = function(sender) {
         console.log("Toggled " + sender.title);

         if (sender.toggled) {
            return;
         }

         $scope.paneButtons.forEach(function(button){
            button.toggled = (button === sender);
         });

         $rootScope.$broadcast('paneChanged', {paneTitle: sender.title});
      };
   });