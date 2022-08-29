import ProductServices from "../service/product.services.js";

class ProductController{ 
    async listProducts(req,res) {
        try {
            const products = await ProductServices.listProducts()
            res.send(products)
        } catch (error) {
            res.status(404).send("La ruta seleccionada no existe")
        }
            
    }
    async saveProducts(req,res){
        try {
            const product = req.body
            const newProduct = await ProductServices.saveProduct(product)
            res.send(newProduct).status(201)
        } catch (error) {
            if(!product){
                res.status(500).send(`Debe ingresar bien los campos requeridProductos :  ${error}`)
            }
            res.send(error)
        }
    }
    async getOneProduct(req,res){
        try {
            const idProduct = req.params.idProduct;
            const findProduct = await ProductServices.findProductByidProduct(idProduct)
            res.send(findProduct)
        } catch (error) {
            res.status(404).send(error)
        }
    }
    async deleteProduct(req,res){
        try {
            const idProduct = req.params.idProduct;
            const deleteProduct = await ProductServices.deleteProduct(idProduct)
            res.status(201).send(deleteProduct)
        } catch (error) {
            res.status(error)
        }
    }
    async updateProduct(req,res){
        try {
            const idProduct = req.params.idProduct;
            const body = req.body
            const updateProduct = await ProductServices.updateProduct(idProduct, body)
            res.send(updateProduct)
            
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async findCategory(req,res){
        try {
            const category = req.params.categoria
            const findByCategory = await ProductServices.findCategory(category)
            res.send(findByCategory)
        } catch (error) {
            res.status(404).send(error)
        }
    }
    async deleteAll(req,res){
        try {
            const dellA = await ProductServices.deleteAll()
            res.status(201).send(dellA)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default new ProductController()