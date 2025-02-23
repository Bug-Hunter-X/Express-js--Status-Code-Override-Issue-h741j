# Express.js Status Code Override Bug

This repository demonstrates a subtle bug in Express.js where setting the HTTP status code *after* sending a response will result in the status code being ignored.

The server will always respond with a 200 OK status code, regardless of what the `res.status()` method sets after the `res.send()` method.