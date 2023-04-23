const JokesApiController = require('../controllers/jokesapi.controller');
//the way we set jokesapicontroller here to equal and require the controllers jokesapi file 
//allows us to reference to it like below to then grab a functoin from that controllers file.

module.exports = app => {
    app.get('/api/allJokes', JokesApiController.findAllJokes);  //set  to get and enter localhost 8000   /  this link
    app.get('/api/oneJoke/:id', JokesApiController.findOneJoke);//set to get and add the link to local host.  replace :id with an actual id belonging to one currently existing
    app.put('/api/editJoke/:id', JokesApiController.updateJoke);//set to put, place the link. replace id with the desired id that belongs to an existing object. go to body. go to raw. and change text to json. /place what you will edit into the body (the properties from models) and edit. make your changes and then press send. id will not change.
    app.post('/api/newJoke', JokesApiController.createJoke); //on postman you want it set to post, localhost:8000/ this link, not text but json, on body, and raw. make creation  by  {"setup": "", "punchline:""} 
    app.delete('/api/delete/:id', JokesApiController.deleteJoke);//set to delete, add link to localhost. replace id with actual existing id. and send through.
}