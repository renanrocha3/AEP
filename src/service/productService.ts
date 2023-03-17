import { readFile, writeFile } from "fs/promises"

class productService{
    create(data){
        try {
            writeFile('products.json',JSON.stringify(data, null, 2))
        } catch (error) {
            throw Error(error)
        }
    }
    async list(){
        
        const products_list = await readFile('products.json','utf-8')
        return JSON.parse(products_list)
    }

    async stock(){
        const products_list = await this.list()
        const stock_list = products_list.map(item => {
            let product = {
                nome: item.nome,
                qtde:  item.qtde ,
                preco:  item.preco,
                valor_estoque: item.preco * item.qtde
            }

            return product
        }) 
        
        return stock_list

    }

    async stockTotal(){
        const stock_list = await this.stock()
        const total = await stock_list.reduce((acc, item) => {

            return acc + item.valor_estoque
        },0)

        return total
    }

}

export default new productService()