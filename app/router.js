import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('releases', {path: '/:owner/:repo/releases'}, function() {
    this.route('show', {path: '/:release_id'});
  });
});

export default Router;
