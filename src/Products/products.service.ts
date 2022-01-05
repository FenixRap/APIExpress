
import {Product} from "./products.entity";
import { Products } from "@prisma/client";

import {ProductsCreateDto} from "./dto/products-create.dto";
import {inject, injectable} from "inversify";
import {IProductService} from "./products.service.interface";
import {TYPES} from "../types";
import {IProductsRepository} from "./products.repository.interface";

@injectable()
export class ProductsService implements IProductService{
    constructor(
        @inject(TYPES.ProductsRepository) private productsRepository: IProductsRepository
    ) {}

   async createProduct ({name, discountPrice, price, img, img2, img3, category, active1,
                      active2, active3, active4, active5, active6,
                      volume, count, sellCount, barCode, engName,
                      skinType, madeCountry, howToUse, description,
                      type, brand, rating }: ProductsCreateDto): Promise<Products | null> {



    const newProduct = await new Product(
    name, discountPrice, price, img, img2, img3, category, active1,
    active2, active3, active4, active5, active6,
    volume, count, sellCount, barCode, engName,
    skinType, madeCountry, howToUse, description,
    type, brand, rating  )

    return this.productsRepository.create(newProduct);
}

}