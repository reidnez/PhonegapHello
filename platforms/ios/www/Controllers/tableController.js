/**
 * Created by reidbelton on 11/10/14.
 */

angular.module("myApp")
   .controller("tableCtrl", function ($scope) {

      var mockAddress = {
         street: "6657 Riata Dr.",
         city: "Redding",
         state: "CA",
         zip: "96001"
      };

      var mockJobs = [
         {startTime: new Date()},
         {startTime: new Date()},
         {startTime: new Date()}
      ];

      var mockPhone = "555-292-8590";

      $scope.mockContacts = [
         {name: "Jim Henson", address: mockAddress, email:"jhenson@gmail.com", phone: mockPhone, jobs:mockJobs},
         {name: "Adam Savage", address: mockAddress, email:"asavage@gmail.com", phone: mockPhone, jobs:mockJobs}
      ];

      $scope.customers = $scope.mockContacts;
      $scope.inspectors = $scope.mockContacts;
   });