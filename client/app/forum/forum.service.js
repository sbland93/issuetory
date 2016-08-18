(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('forum', forum)
    //.constant('forum_LIMIT', {count: 5});

  /* @ngInject */
  function forum(orderByFilter) {
    var vm = this;
    vm.sortByType = sortByType;

    //Sorting By Type From A to F
    //It equip the controllerObj commentA ~commentF
    //It equip the represent(commentA[0]~commentF[0] For helping to make category during adding comments)
    
    function sortByType(_comments, commentObj){

        var comments = orderByFilter(_comments, 'upvote', true);


        commentObj.commentA = [];
        commentObj.commentB = [];
        commentObj.commentC = [];
        commentObj.commentD = [];
        commentObj.commentE = [];
        commentObj.commentF = [];


       _.map(comments, function(comment){

        switch (comment.versions[0].category) {
          case 1:
              commentObj.commentA.push(comment);
              break;
          case 2:
              commentObj.commentB.push(comment);
              break;
          case 3:
              commentObj.commentC.push(comment);
              break;
          case 4:
              commentObj.commentD.push(comment);
              break;
          case 5:
              commentObj.commentE.push(comment);
              break;

          case 6:
              commentObj.commentF.push(comment);
              break;
        }
      })

        vm.representComment = [commentObj.commentA[0].versions[0].title, commentObj.commentB[0].versions[0].title, commentObj.commentC[0].versions[0].title, commentObj.commentD[0].versions[0].title, commentObj.commentE[0].versions[0].title, commentObj.commentF[0].versions[0].title];
    }






  
  }


})();