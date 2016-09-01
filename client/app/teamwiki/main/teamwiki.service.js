(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('teamwiki', teamwiki)

  /* @ngInject */
  function teamwiki(Teamwikis) {
    this.getProject = getProject;
    this.getProjects = getProjects;
    this.create = create;
    this.remove = remove;
    this.update = update;
    this.removeVersion = removeVersion;
    this.updateVersion = updateVersion;
    this.hit = hit;

    function getProject(cardId) {
      return Teamwikis.one(cardId).get();    
    }

    function getProjects(params) {
      console.log('params', params);
      return Teamwikis.customGET('', params);
    }

    function create(params) {
      return Teamwikis.customPOST(params);
    }

    function remove(cardId) {
      return Teamwikis.one(cardId).customDELETE();
    }

    function update(cardId, params) {
      return Teamwikis.one(cardId).customPUT(params);
    }

    function updateVersion(cardId, version){
      return Teamwikis.updateVersion(cardId).customPUT(version);
    }

    //it will delete the version of Card (of cardId)
    function removeVersion(cardId, version){
      return Teamwikis.removeVersion(cardId).customPUT(version);
    }

    //params [ delete delete the upvote or  ]
    function hit(cardId, params){
      console.log('hit!');
      return Teamwikis.hit(cardId).customPUT(params);
    }


  }

  
})();