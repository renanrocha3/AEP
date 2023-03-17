
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import productController from './controller/productController'

const routes = Router()


routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.list)

routes.post('/products', productController.createProducts)
routes.get('/products', productController.listProducts)

routes.get('/products-stock',productController.stockProducts)

//Função Extra usando Reduce
routes.get('/products-stock-total',productController.stockTotal)

export default routes