'use strict';

// Hapi modules
const Hapi    = require('hapi');
const Good    = require('good');
const Path    = require('path');
const Hoek    = require('hoek');

// Server modules
const server  = new Hapi.Server();
const routes  = require('./config/routes');

// Server connection
server.connection({ port : 3000 });

// Assign routes to server
server.route(routes);

// Going to try and create a directory handler to handle the serving of
// multiple static files within a single directory. E.g. public/
server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  // Here we everything from public/ to '/'
  // For example /public/images/space-test.jpg = /images/space-test.jpg
  // @note -> awesome!
  server.route({
    method  : 'GET',
    path    : '/{param*}',
    handler : {
      directory : {
        path    : 'public',
        listing : true
      }
    }
  })
});

// Configure View Engine
server.register(require('vision'), (err) => {
  Hoek.assert(!err, err);

  server.views({
    engines : {
      'html' : {
          module: require('handlebars'),
          compileMode: 'sync'
      }
    },
    relativeTo  : __dirname,
    path        : './views',
    // By default, render the master layout file, unless specified in the route.
    layout      : true,
    layoutPath  : './views/layout',
    helpersPath : './views/helpers'
  });
});

// Register good console to the server, then run -> gives us detailed output
server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, (err) => {
    if (err) {
      throw err; // something bad happened loading the plugin
    }
    server.start((err) => {
      if (err) {
        throw err;
      }
      server.log('info', 'Server running at: ' + server.info.uri);
  });
});
