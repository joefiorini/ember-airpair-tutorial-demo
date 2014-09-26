export default Ember.Route.extend({
  model: function() {
    return [{
      name: "ember-cli",
      url: "/stefanpenner/ember-cli/releases"
    }, {
      name: "half-pipe",
      url: "/d-i/half-pipe/releases"
    }, {
      name: "ember-devise-simple-auth",
      url: "/d-i/ember-devise-simple-auth/releases"
    }, {
      name: "bower",
      url: "/bower/bower/releases"
    }];
  }
});
