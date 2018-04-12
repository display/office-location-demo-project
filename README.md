# office-location-demo-project
This frontend is made to list locations from an API that returns JSON data in this format:
```json
{
  "id": 1106,
  "name": "Venice",
  "position": {
    "latitude": 45.56412,
    "longitude": 12.428058
  },
  "picture": "https://akqalocations.dis-play.dk/media/1019/venice.jpeg",
  "address": "Via Sile 41, Tenuta Ca’ Tron",
  "city": "31056 Roncade, Treviso, Italy",
  "phone": "+39 0422 789612",
  "description": "<p>rich text content</p>"
}
```

And renders the data like this:
![Rendering of google maps](https://i.gyazo.com/4a7e0f3e2660da47b342ac6a1536f6ed.png "Rendering of google maps")

It is written in pure HTML, CSS and JS, no minification, build script or bootstrapper.

If you need to test your API in this frontend, just replace the URL in the fetch script in src/static/js/script.js.

Remember to enable CORS on your API! Access-Control-Allow-Origin is a good place to start.
