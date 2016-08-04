(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('updatecommentCtrl', updatecommentCtrl);

  /* @ngInject */
  function updatecommentCtrl($stateParams, $state, comment, myCache, forum, deepcopy) {


  
    var vm = this;
    vm.o = {};
    vm.o.update = update;
    vm.o.representComment = forum.representComment;
    console.log('representComment',vm.o.representComment)
    _init();

    vm.o.thisVersion = {};
    

    function _init(){
      comment.getComment($stateParams.id, true).then(function(comment){
        vm.o.thisVersion.category = comment.versions[0].category;
        vm.o.thisVersion.title = comment.versions[0].title;
        vm.o.thisVersion.idea = comment.versions[0].idea;
        //vm.o.thisVersion.contributor = comment.versions[0].contributor[comment.versions[0].contributor.length - 1];
        vm.o.thisVersion.link = deepcopy.deepCopy(comment.versions[0].link);
        vm.o.currentComment = comment;
      });
    }
    
    


    function update(cardId, params){
      //비동기식으로 만들어야 하고,변화가 있는지 확인하고(폼에서 하자!) 해야한다.
      var body = {version: params};
      comment.updateVersion(cardId, body).then(function(comment){
      console.log('comment', comment);
        $state.go('forum', {id:comment.card});
      }, function(error){
        console.log("Error", error);
      });
    }

    

  }

})();
