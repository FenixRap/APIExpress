import {BaseController} from "../common/base.controller";
import {NextFunction, Request, Response} from "express";
import { v4 as uuid } from 'uuid';
import path from 'path'
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {ILogger} from "../logger/logger.interface";
import 'reflect-metadata'
import {IProductsController} from "./products.controller.interface";
import {IProductService} from "./products.service.interface";

@injectable()
export class ProductsController extends BaseController implements IProductsController{

    constructor(
        @inject(TYPES.ILogger) private loggerService: ILogger,
        @inject(TYPES.ProductsService) private ProductsService: IProductService
    ) {
        super(loggerService);
        this.bindRoutes([
            {
                path: '/create',
                method: 'post',
                func: this.createItem
            },
            ])
    }

     async createItem(req:Request, res: Response, next: NextFunction):Promise<void>{
         const {
                 name, discountPrice, price, category,
                 active1, active2, active3, active4,
                 active5, active6, volume, count,
                 sellCount, barCode, engName, skinType,
                 madeCountry, howToUse, description, type,
                 brand, rating
                } = req.body

             const fileName1 = uuid() + ".jpg"
             const fileName2 = uuid() + ".jpg"
             const fileName3 = uuid() + ".jpg"

             let img:any = req.files;
             let img2:any = req.files;
             let img3:any = req.files;

             img.mv(path.resolve(__dirname, '..', 'static', fileName1))
             img2.mv(path.resolve(__dirname, '..', 'static', fileName2))
             img3.mv(path.resolve(__dirname, '..', 'static', fileName3))

             img = fileName1;
             img2 = fileName2;
             img3 = fileName3;

              const item = {
                  name, discountPrice, price, img,
                  img2, img3, category, active1,
                  active2, active3, active4, active5,
                  active6, volume, count, sellCount,
                  barCode, engName, skinType, madeCountry,
                  howToUse, description, type, brand, rating
              }

        const result = await this.ProductsService.createProduct(item)
        this.ok(res,req.body)
    }




}