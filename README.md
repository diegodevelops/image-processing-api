# Image Processing API
A simple API developed with Typescript and few popular node modules. Some of the modules and patterns used include:

- espress and its router for the app
- jasmine for unit tests
- supertest for unit tests involving networking
- prettier for formatting
- jimp for image resizing
- nodemon for monitoring during development

The endpoint to get images is: [/images](/images)

Required parameter: `file_name`

Optional parameters: `width` and `height`

Example query: [/images?file_name=japan&width=200&height=200](/images?file_name=japan&width=200&height=200)

Example query in localhost: [http://localhost:3000/images?file_name=japan&width=200&height=200](http://localhost:3000/images?file_name=japan&width=200&height=200)



