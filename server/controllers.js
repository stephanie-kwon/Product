var product = require('./models')

module.exports = {
    home: function(req, res){
        res.json()
    },
    create: function(req,res) {
        product.create(req.body, function(err, prod) {
            if(err) {
                console.log("wrong in create")
            } else {
                console.log("correct in create")
                res.json(prod)
            }
        })
    },
    allproducts: function(req,res){
        product.find({}, function(err, prod) {
            if(err) {
                console.log("wrogn in allprod")
            } else {
                console.log("correct in allprod")
                res.json(prod)
            }
        })
    },
    delete: function(req, res) {
        product.remove({_id: req.params.id}, function(err, prod){
            if(err) {
                console.log("wrong in delete")
            } else {
                console.log("correct in delete")
            }
        })
    },
    edit: function(req,res) {
        console.log(req.params.id)
        console.log("@#$#@$#@$#$@")
        console.log(req.params.id)
        console.log(req.body.title)
        console.log(req.body.price)
    
        product.update({_id: req.params.id}, {$set: req.body}, function (err, prod) {
            if(err) {
                console.log("wrong in update")
            } else {
                console.log("correct in ")
                res.json(prod)
            }
        })
    },
    one: function(req, res) {
        
        console.log(req.params.id)
        product.find({_id: req.params.id}, function(err, prod){
            if(err) {
                console.log("wrong in 1")
            } else {
                console.log("correct in 1")
                res.json(prod)
            }
        })
    }

}