// Export array of objects containig app routes
const currentTemp = require('../controllers/current-temp');

module.exports = [
  {
    method  : 'GET',
    path    : '/',
    handler : (request, reply) => {
      reply('Hello, world!');
    }
  },

  {
    method  : 'GET',
    path    : '/hello/{name}',
    handler : (request, reply) => {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
  },

  // Weather API Routes.
  // Make a request to open weather map to get current weather for a given location
  {
    method  : 'GET',
    path    : '/weather/current/{location}',
    handler  : (request, reply) => {
      const location = request.params.location;
      currentTemp.getCurrentTemp(location, request, reply);
    }
  }

];
