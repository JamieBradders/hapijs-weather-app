const Request  = require('request');
const settings = require('../config/app');

module.exports = {

  /*
   * getCurrentTemp({param to be confirmed})
   * Basically, use the open weather map api to get the current
   * temperature for the given location
   */
   getCurrentTemp : (location, request, reply) => {
     const weatherProperties = {
       q     : location,
       appid : settings.weather.apiKey
     };

     Request({ url: settings.weather.url, qs: weatherProperties}, function(err, response, body) {
       if (err) {
         console.log(err);
         return;
       }

       // Return parsed version of body for now
       reply(JSON.parse(body));
     });
   }

};
