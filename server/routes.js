var controller = require('./controllers')
module.exports = function(app) {
    app.get('/', controller.home);
    app.post('/product/new', controller.create);
    app.get('/allproducts', controller.allproducts);
    app.delete('/product/delete/:id', controller.delete);
    app.put('/product/edit/:id', controller.edit);
    app.get('/product/:id', controller.one);
}
