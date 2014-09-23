eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"ember-airpair-tutorial-demo/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"ember-airpair-tutorial-demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=ember-airpair-tutorial-demo/app.js");

;eval("define(\"ember-airpair-tutorial-demo/config/environment\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"modulePrefix\":\"ember-airpair-tutorial-demo\",\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=ember-airpair-tutorial-demo/config/environment.js");

;eval("define(\"ember-airpair-tutorial-demo/config/environments/development\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"modulePrefix\":\"ember-airpair-tutorial-demo\",\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=ember-airpair-tutorial-demo/config/environments/development.js");

;eval("define(\"ember-airpair-tutorial-demo/config/environments/test\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"modulePrefix\":\"ember-airpair-tutorial-demo\",\"environment\":\"test\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":false,\"LOG_VIEW_LOOKUPS\":false,\"rootElement\":\"#ember-testing\"}};\n  });//# sourceURL=ember-airpair-tutorial-demo/config/environments/test.js");

;eval("define(\"ember-airpair-tutorial-demo/router\", \n  [\"ember\",\"ember-airpair-tutorial-demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.resource(\'releases\', {path: \'/:owner/:repo/releases\'}, function() {\n        this.route(\'show\', {path: \'/:release_id\'});\n      });\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=ember-airpair-tutorial-demo/router.js");

;eval("define(\"ember-airpair-tutorial-demo/routes/releases\", \n  [\"ic-ajax\",\"ember\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var ajax = __dependency1__[\"default\"];\n    var Ember = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      model: function(params) {\n        return ajax({\n          url: \'https://api.github.com/repos/\' + params.owner + \'/\' + params.repo + \'/releases\', type: \'get\'\n        }).then(function(releases) {\n          releases.forEach(function(release) {\n            release.created_at = new Date(release.created_at);\n            release.published_at = new Date(release.published_at);\n          });\n          return releases;\n        });\n      }\n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/routes/releases.js");

;eval("define(\"ember-airpair-tutorial-demo/routes/releases/show\", \n  [\"ic-ajax\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var ajax = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      model: function(params, transition) {\n        var owner = transition.params.releases.owner,\n            repo = transition.params.releases.repo;\n\n        var url = \'https://api.github.com/repos/\' + owner + \'/\' + repo + \'/releases\' + \'/\' + params.release_id;\n\n        return ajax({ url: url, type: \'get\' });\n      }, afterModel: function(model, transition) {\n        var owner = transition.params.releases.owner,\n        repo = transition.params.releases.repo;\n        return ajax({\n          url: \'https://api.github.com/markdown\',\n          type: \'POST\',\n          contentType: \'application/x-www-form-urlencoded\',\n          dataType: \'text\',\n          data: JSON.stringify({\n            text: model.body,\n            mode: \'gfm\',\n            context: owner + \'/\' + repo\n          })\n        }).then(function(text) {\n          model.body_html = text;\n          return model;\n        });\n      }\n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/routes/releases/show.js");

;eval("define(\"ember-airpair-tutorial-demo/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Ember.js</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/templates/application.js");

;eval("define(\"ember-airpair-tutorial-demo/templates/releases\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', helper, options;\n      data.buffer.push(\"\\n        <li>\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:[\"ID\",\"STRING\",\"ID\"],data:data},helper ? helper.call(depth0, \"tag_name\", \"releases.show\", \"\", options) : helperMissing.call(depth0, \"link-to\", \"tag_name\", \"releases.show\", \"\", options))));\n      data.buffer.push(\"</li>\\n      \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<div class=\\\"row\\\">\\n  <div class=\\\"large-2 columns\\\">\\n    <ul class=\\\"side-nav\\\">\\n      \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n    </ul>\\n  </div>\\n\\n  <div class=\\\"large-10 columns end\\\">\\n    \");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n  </div>\\n\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/templates/releases.js");

;eval("define(\"ember-airpair-tutorial-demo/templates/releases/show\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<div class=\\\"row\\\">\\n  <div class=\\\"large-12 columns clearfix\\\">\\n    <h2 class=\\\"left\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"name\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n  </div>\\n</div>\\n<div class=\\\"row\\\">\\n  <div class=\\\"large-12 columns\\\">\\n    \");\n      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"body_html\", {hash:{\n        \'unescaped\': (\"true\")\n      },hashTypes:{\'unescaped\': \"STRING\"},hashContexts:{\'unescaped\': depth0},contexts:[depth0],types:[\"ID\"],data:data})));\n      data.buffer.push(\"\\n  </div>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/templates/releases/show.js");

;eval("define(\"ember-airpair-tutorial-demo/templates/show\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<div class=\\\"row\\\">\\n  <div class=\\\"large-12 columns clearfix\\\">\\n    <h2 class=\\\"left\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"name\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n  </div>\\n</div>\\n<div class=\\\"row\\\">\\n  <div class=\\\"large-12 columns\\\">\\n    \");\n      stack1 = helpers._triageMustache.call(depth0, \"body\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n  </div>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/templates/show.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/app.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/ember-airpair-tutorial-demo/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-airpair-tutorial-demo/tests/helpers\');\n    test(\'ember-airpair-tutorial-demo/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'ember-airpair-tutorial-demo/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/ember-airpair-tutorial-demo/tests/helpers/resolver.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/ember-airpair-tutorial-demo/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-airpair-tutorial-demo/tests/helpers\');\n    test(\'ember-airpair-tutorial-demo/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'ember-airpair-tutorial-demo/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/ember-airpair-tutorial-demo/tests/helpers/start-app.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/ember-airpair-tutorial-demo/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-airpair-tutorial-demo/tests\');\n    test(\'ember-airpair-tutorial-demo/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'ember-airpair-tutorial-demo/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/ember-airpair-tutorial-demo/tests/test-helper.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/helpers/resolver\", \n  [\"ember/resolver\",\"ember-airpair-tutorial-demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/helpers/resolver.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/helpers/start-app\", \n  [\"ember\",\"ember-airpair-tutorial-demo/app\",\"ember-airpair-tutorial-demo/router\",\"ember-airpair-tutorial-demo/config/environments/test\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/helpers/start-app.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/router.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/routes/releases.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/releases.js should pass jshint\', function() { \n      ok(true, \'routes/releases.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/routes/releases.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/routes/releases/show.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes/releases\');\n    test(\'routes/releases/show.js should pass jshint\', function() { \n      ok(false, \'routes/releases/show.js should pass jshint.\\nroutes/releases/show.js: line 3, col 16, \\\'Ember\\\' is not defined.\\n\\n1 error\'); \n    });\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/routes/releases/show.jshint.js");

;eval("define(\"ember-airpair-tutorial-demo/tests/test-helper\", \n  [\"ember-airpair-tutorial-demo/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    if (QUnit.urlParams.nocontainer) {\n      document.getElementById(\'ember-testing-container\').style.visibility = \'hidden\';\n    } else {\n      document.getElementById(\'ember-testing-container\').style.visibility = \'visible\';\n    }\n  });//# sourceURL=ember-airpair-tutorial-demo/tests/test-helper.js");
