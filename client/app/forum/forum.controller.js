

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('forumCtrl', forumCtrl);

  /* @ngInject */
  function forumCtrl($scope, $stateParams, $state, Auth, card, comment, forum, cardCache) {

  
    var vm = this;
    vm.obj = {};
    vm.obj.currentCard = {};
    vm.obj.currentCardId = $stateParams.id;
    vm.obj.update = update;
    vm.obj.remove = remove;
    vm.obj.controllView = controllView;
    vm.obj.createComment = createComment;
    vm.obj.addComment = false;
    vm.obj.cardVersions = false;
    vm.obj.similarA = false;
    vm.obj.similarB = false;
    vm.obj.similarC = false;
    vm.obj.similarD = false;
    vm.obj.similarE = false;
    vm.obj.similarF = false;


    _init();



    //getCard list with _init()

    function _init() {
      
      cardCache.cachingCard($stateParams.id).then(function(card){
        vm.obj.currentCard = card;
        
        //it will make vm.obj.commentA ~ vm.obj.commentF
        //이부분도 비동기식으로 바꿔야 한다.
        forum.sortByType(vm.obj.currentCard.comments, vm.obj); 
        vm.obj.represent = [vm.obj.commentA[0].title, vm.obj.commentB[0].title, vm.obj.commentC[0].title, vm.obj.commentD[0].title, vm.obj.commentE[0].title, vm.obj.commentF[0].title];
        console.log('For Test: vm.obj.represent', vm.obj.represent);
      });

      //Cache처럼 Refactoryin!
      Auth.getCurrentUser(function(user){
        vm.obj.currentUser = user;
      });

    }


    function controllView(category){
      if(category == 'addComment') vm.obj.addComment = !vm.obj.addComment;
      if(category == 'cardVersions') vm.obj.cardVersions = !vm.obj.cardVersions;
      if(category == 'A') vm.obj.similarA = !vm.obj.similarA;
      if(category == 'B') vm.obj.similarB = !vm.obj.similarB;
      if(category == 'C') vm.obj.similarC = !vm.obj.similarC;
      if(category == 'D') vm.obj.similarD = !vm.obj.similarD;
      if(category == 'E') vm.obj.similarE = !vm.obj.similarE;
      if(category == 'F') vm.obj.similarF = !vm.obj.similarF;
    }


    
    function update(cardId, params){
      card.update(cardId, params).then(function(card){
        $state.go('card');
      });
    }

    function remove(cardId){
      card.remove(cardId).then(function(card){
        $state.go('card');
      });
    }

    function createComment(params, cardId){
      console.log("For Test: createComment is called and params", params);
      console.log("For Test: createComment is called and cardId", cardId);
      if(params.category == 1) params.category = 'A';
      if(params.category == 2) params.category = 'B';
      if(params.category == 3) params.category = 'C';
      if(params.category == 4) params.category = 'D';
      if(params.category == 5) params.category = 'E';
      if(params.category == 6) params.category = 'F';
      console.log("For Test: createComment is called and params.category", params.category);


      comment.create(params, cardId).then(function(comment){
        console.log("For Test: comment is", comment);
        vm.obj.commentA.push(comment);
        vm.obj.addComment = !vm.obj.addComment;
      });
    }

  }

})();
