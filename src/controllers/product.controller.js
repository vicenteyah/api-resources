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

    try{
        const productStored = await product.save()
        res.status(201).send({message:productStored})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports={
    addProduct
}