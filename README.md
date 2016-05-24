# My Demo Weather App
This app was built with hapi.js. More info to follow as I work through it, simply run `npm start` and this will perform a `npm intall`, `jspm install` and `gulp scripts` to build the client side JS. Of course in time Gulp will be updated to build scss etc.

You may encounter an error regarding a missing .env file upon your first run. Please acquire an API Key from [Open Weather Map](http://openweathermap.org/api) and then create a file called `.env` with the following contents:

```
    API_KEY=YOUR-KEY-HERE
```

Once created, save the project and you're good to go!

## Note!
If you stumble across this repository then just disregard for now, it's a development in progress and a way for me to practice using the hapi.js framework. Feel free to clone it's current version as a baseline and refactor to your heart's content but please don't judge 😉

I aim to get to a point where the app is complete and I can post about the development phase through my blog!

## Changelog
24th May 2016 - Haven't touched this repo for some time, not sure if Hapi.Js has changed since last using this but noticed some issues with server.js so I have applied some fixes here. I'll do some more tidying up overtime. I have also added the dotenv module to all the use of environment variables for API Access Tokens etc.
