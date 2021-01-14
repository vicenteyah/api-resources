const Product = require('../models/product')

async function addProduct ( req , res){
    const {
        name,
        size,
        unitaryPrice,
        description
    } = req.body

    const product = Product({
        name,
        size,
        unitaryPrice,
        description
    })
    
    if(req.file){
        const { fieldname } = req.file
        product.setImgUrl(fieldname)
    }
    
    try{
        const productStored = await product.save()
        res.status(201).send({message:productStored})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function getProducts(req,res){
    try{
        const products = await Product.find()
        res.status(200).send({items:products})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function getProduct(req,res){
    let productId = req.params.productId
    try {
        await Product.findOne({_id:productId},(err,product)=>{
            if(err) return res.status(500).send({message:'cannot get this item'})
            if(!product) return res.status(404).send({message:'item not found'})
            res.status(200).send({message:product})
        })
    } catch (error) {
        throw error
    }
}

async function updateProduct(req,res) { 
    let productId = req.params.productId
    let update = req.body

    try {
        await Product.findOneAndUpdate({_id:productId},update ,(err, product) => {
            if(err) return res.status(500).send({message:`cannot update this product ${err}`})
            res.status(200).send({message:'this product has been updated',product})
        })
    } catch (error) {
        throw error
    } 
}

async function deleteProduct (req, res) {
    let productId = req.params.productId
    try {
        await Product.findOneAndDelete({_id:productId},(err,productDeleted) => {
            if(err) return res.status(500).send({message: 'cannot delete this product'})
            if(!productDeleted) res.status(404).send({message: 'product not found'})
            res.status(200).send({message:'this product has been deleted',productDeleted})
        })
    } catch (error) {
        throw error
    }
}

module.exports={
    addProduct,
    getProducts,
    updateProduct,
    getProduct,
    deleteProduct
}