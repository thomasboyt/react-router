var React = require('react');
var Route = require('./Route');

function Redirect(attrs) {
  return Route({
    path: attrs.from,
    handler: createRedirectClass(attrs.to)
  });
}

function createRedirectClass(to) {
  return React.createClass({
    statics: {
      willTransitionTo: function(transition, params, query) {
        transition.redirect(to, params, query);
      }
    },

    render: function() {
      return null;
    }
  });
}

module.exports = Redirect;
