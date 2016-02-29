/*
 * This file will more than likely change over time, for now I'm just going to use this
 * file to test the ajax call, haven't decided on a JS framework as of yet. Still debating
 * on which one to use -_-
 */

// import $ from 'jquery';

export function bootstrap() {
  console.log('Hello world from bootstrap');
}

export function callWeatherApi() {
  // const $form = $('.location-data');

  // When user submits the form, get the data.
  $('.location-data').submit( (event) => {

    /*
     * Loop through each value in the form and write to an object.
     * @NOTE : This will be good as a helper method, consider moving into a helper file.
     */
    const $inputs = $('.location-data :input'); // Could be better?
    const values  = {};

    $inputs.each(function() {
      values[this.name] = $(this).val();
    });

    const location = values.location;

    // Currently using my own stuff with Ajax.
    // Consider using something like npm request for this app or maybe even
    // Angular or something of the likes, depends if it's really needed or not...
    $.ajax({
      url    : '/weather/current/' + location,
      method : 'GET'
    })
    .done( (data) => {
      console.log('This is the data', data);
    })
    .fail( (err) => {
      console.log('There has been an error', err);
    });

    event.preventDefault();
  });
}
