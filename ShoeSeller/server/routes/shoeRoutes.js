const ShoeController = require('../controllers/ShoeControllers');

module.exports = app => {
    app.get('/api/allShoes', ShoeController.findAllShoes);
    app.post('/api/newShoe', ShoeController.createShoe);
    app.get('/api/oneShoe/:id', ShoeController.findOneShoe);
    app.put('/api/updateShoe/:id', ShoeController.updateShoe);
    app.delete('/api/deleteShoe/:id', ShoeController.deleteShoe);
}
// these .findall and etc come from controllers.