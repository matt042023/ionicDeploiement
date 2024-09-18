const Product = require('../model/Product');


/*
* @params null
* @body null
* This methods is used for get all product without pagination
*/
exports.getAllProduct = async (req, res, next) => {
    await Product.find({})
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({ message: err.message }))
}


/*
* @params null
* @body {name, description(non required), price}
* This methods is used for create a product
*/
exports.createProduct = async (req, res, next) => {
    await Product.create({ ...req.body })
        .then(() => res.status(201).json({ ...req.body }))
        .catch (err => res.status(500).json({ message: err.message }))
}

/*
* @params id
* @body null
* This methods is used for get product by the params id map with _id in database
*/
exports.getProductById = async (req, res, next) => {
    await Product.findById(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(404).json({message: err.message}))
}

/*
* @params id
* @body null
* This methods is used for delete product by the params id map with _id in database
*/
exports.deleteProductById = async (req, res, next) => {
    await Product.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({message: "The product is deleted"}))
        .catch(err => res.status(404).json({message: err.message}))
}

/*
* @params id
* @body {name, description(non required), price}
* This methods is used for update product by the params id map with _id in database
*/
exports.updateProductById = async (req, res, next) => {
    await Product.findByIdAndUpdate(req.params.id, {...req.body})
        .then(() => res.status(200).json({...req.body}))
        .catch(err => res.status(404).json({message: err.message}))
}