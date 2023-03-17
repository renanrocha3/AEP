import { Request, Response} from "express"
import  productService  from "../service/productService"

class productsController{
    createProducts(req: Request, res : Response) {
        productService.create(req.body)
        res.status(201).send()
    }

    async listProducts(req: Request, res: Response){
        const products_list = await productService.list()
        res.status(200).send(products_list)
    }

    async stockProducts(req: Request, res: Response){
        const stock_list = await productService.stock()
        res.status(200).send(stock_list)
    }

    async stockTotal(req: Request, res: Response){
        const total_stock = await productService.stockTotal()
        res.status(200).send(JSON.stringify(total_stock))
    }
}

export default new productsController()