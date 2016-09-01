

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('projectCtrl', projectCtrl);

  /* @ngInject */
  function projectCtrl($scope, $stateParams, $state, teamwiki, comment, storage) {

  
    var vm = this;
    vm.o = {};
    vm.o.currentProject = {};
    vm.o.update = update;
    vm.o.remove = remove;
    vm.o.currentUser = storage.get('currentUser');
    vm.o.controllView = controllView;
    vm.o.createComment = createComment;
    vm.o.updateComment = updateComment;
    vm.o.removeComment = removeComment;
    vm.o.hitComment = hitComment;
    vm.o.hit = hit;

    vm.o.addComment = false;
    vm.o.cardVersions = false;
    vm.o.similarA = false;
    vm.o.similarB = false;
    vm.o.similarC = false;
    vm.o.similarD = false;
    vm.o.similarE = false;
    vm.o.similarF = false;


    _init();



    //getProject with _init()

    function _init() {
      teamwiki.getProject($stateParams.id).then(function(project){
      	console.log('project!!!!!!!!!!!!!', project)
        vm.o.currentProject = project;
        console.log(vm.o.currentProject.name);
      }
      );


    }


    function controllView(category){
      if(category == 'addComment') vm.o.addComment = !vm.o.addComment;
      if(category == 'cardVersions') vm.o.cardVersions = !vm.o.cardVersions;
      if(category == 1) vm.o.similarA = !vm.o.similarA;
      if(category == 2) vm.o.similarB = !vm.o.similarB;
      if(category == 3) vm.o.similarC = !vm.o.similarC;
      if(category == 4) vm.o.similarD = !vm.o.similarD;
      if(category == 5) vm.o.similarE = !vm.o.similarE;
      if(category == 6) vm.o.similarF = !vm.o.similarF;
    }


    function hitComment(commentId, params){
      return comment.hit(commentId, params);
    }

    function hit(projectId, params){
      return teamwiki.hit(projectId, params);
    }
    

    function update(projectId, params){
      teamwiki.update(projectId, params).then(function(card){
          console.log('update!' , card);
        });
    }

    function remove(projectId){
      card.remove(projectId).then(function(card){
        $state.go('card');
      });
    }

    function createComment(params, projectId){
      
      console.log("For Test: createComment is called and params.category", params.category);

      comment.create(params, projectId).then(function(comment){

        console.log("For Test: comment is", comment);
        if(comment.category == 1) vm.o.commentA.push(comment);
        if(comment.category == 2) vm.o.commentB.push(comment);
        if(comment.category == 3) vm.o.commentC.push(comment);
        if(comment.category == 4) vm.o.commentD.push(comment);
        if(comment.category == 5) vm.o.commentE.push(comment);
        if(comment.category == 6) vm.o.commentF.push(comment);
        vm.o.addComment = !vm.o.addComment;
      });

    }

    function updateComment(commentId, params){
      comment.update(commentId, params).then(function(comment){
          console.log('update!');
        });
    }

    function removeComment(commentId, category, index){
      console.log('removeComment');

      comment.remove(commentId).then(function(){
        console.log('remove!');
        if(category == 1) _removeCommentOnClient(vm.o.commentA, commentId);
        if(category == 2) _removeCommentOnClient(vm.o.commentB, commentId);
        if(category == 3) _removeCommentOnClient(vm.o.commentC, commentId);
        if(category == 4) _removeCommentOnClient(vm.o.commentD, commentId);
        if(category == 5) _removeCommentOnClient(vm.o.commentE, commentId);
        if(category == 6) _removeCommentOnClient(vm.o.commentF, commentId);
      })
    }

    function _removeCommentOnClient(commentObj/*commentA~commentF */, commentId){
      var index =  _.findIndex(commentObj, function(o){return o._id == commentId});
        commentObj.splice(index, 1);
    }




  }

})();



