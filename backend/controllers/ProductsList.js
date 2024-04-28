const Product = require( '../models/Product')

const products = async (req,res)=>{
    try {
        let products=await Product.find();
        res.send(products.length>0 ? products : {result:"No Products Found"});

        
    } catch (error) {
        return res.status(422).json({
            status: false,
            message: error.message,
          });
    }
 
}

module.exports=products;
