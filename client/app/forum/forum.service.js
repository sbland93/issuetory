(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('forum', forum)
    //.constant('forum_LIMIT', {count: 5});

  /* @ngInject */
  function forum() {
    var vm = this;
    vm.sortByType = sortByType;
    vm.representComment = [];
    
    //Sorting By Type From A to F
    //It equip the controllerObj commentA ~commentF
    //It equip the represent(commentA[0]~commentF[0] For helping to make category during adding comments)
    

    function sortByType(comments, commentObj){
        commentObj.commentA = [];
        commentObj.commentB = [];
        commentObj.commentC = [];
        commentObj.commentD = [];
        commentObj.commentE = [];
        commentObj.commentF = [];


       _.map(comments, function(comment){

        switch (comment.category) {
          case 'A':
              commentObj.commentA.push(comment);
              break;
          case 'B':
              commentObj.commentB.push(comment);
              break;
          case 'C':
              commentObj.commentC.push(comment);
              break;
          case 'D':
              commentObj.commentD.push(comment);
              break;
          case 'E':
              commentObj.commentE.push(comment);
              break;
          case 'F':
              commentObj.commentF.push(comment);
              break;
        }

      })

       vm.representComment.push(commentObj.commentA[0].title);
       vm.representComment.push(commentObj.commentB[0].title);
       vm.representComment.push(commentObj.commentC[0].title);
       vm.representComment.push(commentObj.commentD[0].title);
       vm.representComment.push(commentObj.commentE[0].title);
       vm.representComment.push(commentObj.commentF[0].title);
       console.log(vm.representComment);

    }
  
  }
})();