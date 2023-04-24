const ProductController = require('../controllers/productControllers');

module.exports = app => {
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.post('/api/newProduct', ProductController.createProduct);
    app.get('/api/oneProduct/:id', ProductController.findOneProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
}
// these .findall and etc come from controllers.