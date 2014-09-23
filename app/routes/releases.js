import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return ajax({
      url: 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/releases', type: 'get'
    }).then(function(releases) {
      releases.forEach(function(release) {
        release.created_at = new Date(release.created_at);
        release.published_at = new Date(release.published_at);
      });
      return releases;
    });
  }
});
