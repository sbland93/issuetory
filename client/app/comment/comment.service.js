(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('comment', comment)
    //.constant('CARD_LIMIT', {count: 5});

  /* @ngInject */
  function comment(Comments, myCache, $q) {
    this.getComment = getComment;
    this.getComments = getComments;
    this.create = create;
    this.remove = remove;
    this.update = update;
    this.removeVersion = removeVersion;
    this.updateVersion = updateVersion;

    function getComment(commentId, refreshingCache) {
     
      return Comments.one(commentId).get()
    
    }

    function getComments (params, refreshingCache) {

      return Comments.customGET('', params)
    
    }

    //Put The cardId to params.
    function create(params, cardId) {
    	params.cardId = cardId; 
      return Comments.customPOST(params);
    }

    function remove(commentId) {
      return Comments.one(commentId).customDELETE();
    }

    function update(commentId, params) {
      return Comments.one(commentId).customPUT(params);
    }
    
    function updateVersion(cardId, version){
      return Comments.updateVersion(cardId).customPUT(version);
    }

    //it will delete the version of Card (of cardId)
    function removeVersion(cardId, version){
      return Comments.removeVersion(cardId).customPUT(version);
    }

  }
})();