import {ProductsCreateDto} from './dto/products-create.dto'
import {Products} from "@prisma/client"


export interface IProductService {
    createProduct: (dto: ProductsCreateDto ) => Promise< Products | null>;
}