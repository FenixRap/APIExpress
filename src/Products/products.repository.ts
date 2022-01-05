import {IProductsRepository} from "./products.repository.interface";
import {Products} from "@prisma/client";
import {Product} from "./products.entity";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {PrismaService} from "../database/prisma.sevice";

@injectable()
export class ProductsRepository implements IProductsRepository{
    constructor( @inject(TYPES.PrismaService) private prismaService: PrismaService) { }

    async create ({ name, discountPrice, price, img, img2,
                      img3, category, active1, active2, active3,
                      active4, active5, active6, volume, count,
                      sellCount, barCode, engName, skinType,
                      madeCountry, howToUse, description, type,
                      brand, rating}: Product): Promise<Products> {
        return this.prismaService.client.products.create({
            data: {
                name, discountPrice, price, img, img2,
                img3, category, active1, active2, active3,
                active4, active5, active6, volume, count,
                sellCount, barCode, engName, skinType,
                madeCountry, howToUse, description, type,
                brand, rating
            }
        })
    }
}