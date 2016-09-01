


(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('teamwikiCtrl', teamwikiCtrl);

  /* @ngInject */
  function teamwikiCtrl($scope, teamwiki, $state, Auth, storage) {
  
    var vm = this;
    vm.o = {};


    vm.o.controllView = controllView;
    vm.o.getProject = getProject;
    vm.o.getProjects = getProjects;
    vm.o.create = create;
    vm.o.update = update;
    vm.o.hit = hit;

    //sort
    vm.o.sortGlory = sortGlory;
    vm.o.sortHistory = sortHistory;
    vm.o.sortAll = sortAll;
 
    vm.o.viewAddForm = false;
    vm.o.currentUser = storage.get('currentUser');

    vm.o.projectList = [];
    _init();



    //getProject list with _init()
    function _init() {
    
      getProjects();
    
    }


    //params including sorting option and query options;
    function getProjects(params){
      console.log('getProjects is called')
      teamwiki.getProjects(params).then(function(projects){
      console.log('data', projects)
        vm.o.projectList = projects;
      });
    
    }


    function getProject(projectId){

      teamwiki.getProject(projectId).then(function(project){
        vm.o.currentCard = project;
      })
    
    }


    function create(params){
      console.log('For Test: create() is called [teamwiki.controller.js 53]');
      teamwiki.create(params).then(function(project){
        console.log('project is come!');
        vm.o.projectList.unshift(project);
        vm.o.viewAddForm = !vm.o.viewAddForm;
      })
    }

    
    function update(projectId, params){
      teamwiki.update(projectId, params).then(function(project){
        console.log('hit!');
      });
    }


    function hit(projectId, params){
      return teamwiki.hit(projectId, params);
    }


    function remove(projectId){
      teamwiki.remove(projectId).then(function(project){
        var _num = vm.o.projectList.indexOf(project);
        vm.o.projectList.splice(_num, 1);
      })
    }

    function controllView(){
      vm.o.viewAddForm = !vm.o.viewAddForm;
    }

    function sortGlory(gloryStandard){
      getProjects({ queryOptions: {upvote: {$gte: gloryStandard}}, sortOptions : {created_at: -1}});
    }

    function sortAll(){
      getProjects();
    }

    function sortHistory(){
      getProjects({sortOptions: {upvote: -1}});
    }



  }

})();
