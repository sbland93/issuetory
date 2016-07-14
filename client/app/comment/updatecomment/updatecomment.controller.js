(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('updatecommentCtrl', updatecommentCtrl);

  /* @ngInject */
  function updatecommentCtrl($stateParams, $state, comment, myCache, forum, deepcopy) {


  
    var vm = this;
    vm.obj = {};
    vm.obj.update = update;
    vm.obj.representComment = forum.representComment;
    console.log('representComment',vm.obj.representComment)
    _init();

    var lastComment = {};


    function _init(){
      comment.getComment($stateParams.id, true).then(function(comment){
        lastComment.category = comment.category;
        lastComment.title = comment.title;
        lastComment.idea = comment.idea;
        //lastComment.contributor = comment.contributor[comment.contributor.length - 1];
        lastComment.link = deepcopy.deepCopy(comment.link);
        vm.obj.currentComment = comment;
      });
    }
    
    
    function update(commentId, params){
      if(params.category == 1) params.category = 'A';
      if(params.category == 2) params.category = 'B';
      if(params.category == 3) params.category = 'C';
      if(params.category == 4) params.category = 'D';
      if(params.category == 5) params.category = 'E';
      if(params.category == 6) params.category = 'F';
      console.log("For Test: createComment is called and params.category", params.category);

      //비동기식으로 만들어야 하고,변화가 있는지 확인하고(폼에서 하자!) 해야한다.
      params.versions.push(lastComment);
      console.log("For Test: createComment is called and parmas", params);

      comment.update(commentId, params).then(function(comment){
        console.log("For Test: lastComment", lastComment);
        $state.go('forum', {id:comment.card});
      }, function(error){
        console.log("Error", error);
      });

    }

    

  }

})();
