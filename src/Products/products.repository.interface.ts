import { Products } from "@prisma/client";
import {Product} from "./products.entity";

export interface IProductsRepository{
    create: (product: Product) => Promise<Products>;
}