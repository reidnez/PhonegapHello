/**
 * Created by reidbelton on 11/10/14.
 */
angular.module("myApp")
   .controller("equipmentCtrl", function ($scope) {

      $scope.states = {
         tableMode: true,
         editMode: false,
         promptToDeleteMode: false,
         enterNewDeviceMode: false
      };

      $scope.tableModeButtonPressed = function(sender) {
         $scope.states.tableMode = (sender === 'table');
      };

      $scope.allDevices = function () {
         return [
            {type: "CS-65", serial:"022522768", softwareVersion: "1.0.3", jobs: [{}, {}, {}, {}, {}], updateAvailable: false},
            {type: "SR-24", serial:"055789890", softwareVersion: "2.2", jobs: [{}, {}, {}], updateAvailable: true},
            {type: "SR-60", serial:"784098390", softwareVersion: "1.8", jobs: [{}, {}, {}, {}, {}, {}, {}], updateAvailable: false},
            {type: "SR-24", serial:"022489589", softwareVersion: "2.0", jobs: [{}, {}], updateAvailable: false},
            {type: "CS-65", serial:"575930989", softwareVersion: "1.0", jobs: [{}], updateAvailable: true},
            {type: "SR-24", serial:"055789890", softwareVersion: "2.2", jobs: [{}, {}, {}], updateAvailable: false},
            {type: "SR-60", serial:"784098390", softwareVersion: "1.8", jobs: [{}], updateAvailable: false}
         ];
      };

      $scope.devices = $scope.allDevices();

      $scope.getDeviceThumbnailForDeviceType = function (type) {
         return "../Resources/Images/DeviceThumbs/" + type + ".jpeg";
      };

      $scope.editButtonPressed = function () {
         $scope.states.enterNewDeviceMode = false;
         $scope.states.editMode = !$scope.states.editMode;
         if (!$scope.editMode) {
            $scope.states.promptToDeleteMode = false;
            $scope.devices.forEach(function(aDev) {
               aDev.promptToDelete = false;
            });
         }
      };

      $scope.cancelDeleteButtonPressed = function () {
         $scope.states.promptToDeleteMode = false;
         $scope.devices.forEach(function (aDev) {
            aDev.promptToDelete = false;
         });
      };

      $scope.confirmDeleteButtonPressed = function () {
         $scope.states.promptToDeleteMode = false;

         $scope.devices = $scope.devices.filter( function (aDev) {
            return !aDev.promptToDelete;
         });
      };

      $scope.promptToDeleteDevice = function (device) {
         $scope.states.promptToDeleteMode = true;
         device.promptToDelete = true;
      };

      $scope.cancelDeleteDevice = function (device) {
         $scope.promptToDeleteMode = false;
         device.promptToDelete = false;
      };


      // For testing purposes we're using this as a "reset button" for now...
      $scope.addButtonPressed = function () {
         $scope.states.editMode = false;
         $scope.states.promptToDeleteMode = false;
         $scope.states.enterNewDeviceMode = !$scope.states.enterNewDeviceMode;
      };

      $scope.refreshDevices = function () {
         $scope.devices = $scope.allDevices();
      };

      $scope.cellDeleteButtonPressed = function (device) {
         device.promptToDelete = true;
         $scope.devices.forEach(function(aDev) {
            if (aDev !== device) {
               aDev.promptToDelete = false;
            }
         });
      };
   });