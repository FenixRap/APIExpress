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


        const result = await this.ProductsService.createProduct(req.body)
        this.ok(res,"Пиздец. Ты это сделал.")
    }




}