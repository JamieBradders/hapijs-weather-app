// Export array of objects containig app routes
const weather = require('../controllers/weather');

module.exports = [
  {
    method  : 'GET',
    path    : '/',
    handler : (request, reply) => {
      reply.view('homepage');
    }
  },

  {
    method  : 'GET',
    path    : '/hello/{name}',
    handler : (request, reply) => {
      reply.view('homepage', { title : 'Hello ' + request.params.name });
    }
  },

  // Weather API Routes.
  // Make a request to open weather map to get current weather for a given location
  {
    method  : 'GET',
    path    : '/weather/current/{location}',
    handler  : (request, reply) => {
      const location = request.params.location;
      weather.getCurrentTemp(location, request, reply);
    }
  }

];
