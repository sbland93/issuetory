

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('forumCtrl', forumCtrl);

  /* @ngInject */
  function forumCtrl($scope, $stateParams, $state, Auth, card, comment, forum, cardCache) {

  
    var vm = this;
    vm.o = {};
    vm.o.currentCard = {};
    vm.o.currentCardId = $stateParams.id;
    vm.o.update = update;
    vm.o.remove = remove;
    vm.o.controllView = controllView;
    vm.o.createComment = createComment;
    vm.o.updateComment = updateComment;


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
      
      cardCache.cachingCard($stateParams.id).then(function(card){
        vm.o.currentCard = card;
        
        //it will make vm.o.commentA ~ vm.o.commentF
        //이부분도 비동기식으로 바꿔야 한다.
        forum.sortByType(vm.o.currentCard.comments, vm.o); 
        vm.o.represent = [vm.o.commentA[0].title, vm.o.commentB[0].title, vm.o.commentC[0].title, vm.o.commentD[0].title, vm.o.commentE[0].title, vm.o.commentF[0].title];
      });

      //Cache처럼 Refactoryin!
      Auth.getCurrentUser(function(user){
        vm.o.currentUser = user;
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


    
    function update(cardId, params){
      card.update(cardId, params).then(function(card){
          console.log('update!');
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
        vm.o.commentA.push(comment);
        vm.o.addComment = !vm.o.addComment;
      });
    }

    function updateComment(commentId, params){
      comment.update(commentId, params).then(function(comment){
          console.log('update!');
        });
    }




  }

})();
