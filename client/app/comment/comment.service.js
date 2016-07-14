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

    function getComment(commentId, refreshingCache) {
      var deferred = $q.defer();

      if(myCache.get('comment'+commentId) && !refreshingCache){
        console.log("Using Cache..");
        deferred.resolve(myCache.get('comment'+commentId));

      }
    
      else{
        console.log('For Test: refreshing');
        Comments.one(commentId).get().then(function(currentCard){
              myCache.put('comment'+commentId, currentCard);
              console.log('mycache.get(card_cardId)', myCache.get('comment'+commentId));
              deferred.resolve(myCache.get('comment'+commentId));
            }, function(error){
              deferred.reject(error);
            });
      
      }

      return deferred.promise;
    
    }

    function getComments (params, refreshingCache) {
      var deferred = $q.defer();

      if(myCache.get('commentList') && !refreshingCache){

        deferred.resolve(myCache.get('commentList'));

      }

      else {
        Comments.customGET('', params).then(function(commentList){
              myCache.put('commentList', commentList);
              deferred.resolve(myCache.get('commentList'));
            }, function(error){
              deferred.reject(error);
            });
      }

      return deferred.promise;
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
    

  }
})();