'use strict';

angular.module('basic')
  .controller('MainController', function () {

    var vm = this;

    vm.userName = 'Example user';
    vm.helloText = 'Welcome in basic Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  });
