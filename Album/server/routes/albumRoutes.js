const AlbumController = require('../controllers/albumControllers');

module.exports = app => {
    app.get('/api/allAlbums', AlbumController.findAllAlbums);
    app.post('/api/newAlbum', AlbumController.createAlbum);
    app.get('/api/oneAlbum/:id', AlbumController.findOneAlbum);
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum);
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum);
}
// these .findall and etc come from controllers.