

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('forumCtrl', forumCtrl);

  /* @ngInject */
  function forumCtrl($scope, $stateParams, $state, card, comment, forum, cardCache, storage) {

  
    var vm = this;
    vm.o = {};
    vm.o.currentCard = {};
    vm.o.currentCardId = $stateParams.id;
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



    //getCard list with _init()

    function _init() {
      card.getCard($stateParams.id).then(function(card){
        vm.o.currentCard = card;
        

        //it will make vm.o.commentA ~ vm.o.commentF
        //이부분도 비동기식으로 바꿔야 한다.
        forum.sortByType(vm.o.currentCard.comments, vm.o)
        
        vm.o.represent = [vm.o.commentA[0].versions[0].title, vm.o.commentB[0].versions[0].title, vm.o.commentC[0].versions[0].title, vm.o.commentD[0].versions[0].title, vm.o.commentE[0].versions[0].title, vm.o.commentF[0].versions[0].title];
      });



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

    function hit(cardId, params){
      return card.hit(cardId, params);
    }
    

    function update(cardId, params){
      card.update(cardId, params).then(function(card){
          console.log('update!' , card);
        });
    }

    function remove(cardId){
      card.remove(cardId).then(function(card){
        $state.go('card');
      });
    }

    function createComment(params, cardId){
      
      console.log("For Test: createComment is called and params.category", params.category);

      comment.create(params, cardId).then(function(comment){

        console.log("For Test: comment is", comment);
        if(comment.versions[0].category == 1) vm.o.commentA.push(comment);
        if(comment.versions[0].category == 2) vm.o.commentB.push(comment);
        if(comment.versions[0].category == 3) vm.o.commentC.push(comment);
        if(comment.versions[0].category == 4) vm.o.commentD.push(comment);
        if(comment.versions[0].category == 5) vm.o.commentE.push(comment);
        if(comment.versions[0].category == 6) vm.o.commentF.push(comment);
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



