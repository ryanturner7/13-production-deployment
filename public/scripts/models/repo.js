'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  // TODO: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
   //       Don't forget to remove the headers from our request - we're no longer using a token on the
   //       client side of our app, our new proxyGitHub function will be handling the token using our
   //       new environment variable!

  repos.requestRepos = function(callback) {
    $.get('/github', function(data){
      repos.all(data);
      callback(data);
    }, function(err){
      console.error(err);
    });
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
