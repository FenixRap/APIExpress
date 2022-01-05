import {BaseController} from "../common/base.controller";
import {NextFunction, Request, Response} from "express";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {ILogger} from "../logger/logger.interface";
import 'reflect-metadata'

@injectable()
export class MenuController extends BaseController{

    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService);
        this.bindRoutes([
            {path: '/menuItems', method: 'post', func: this.getMenuItems},
            ])
    }
    async getMenuItems(req: Request, res: Response, next: NextFunction){
        this.ok(res,"...")
    }


    // menu(req: Request, res: Response, next: NextFunction){
    //     this.ok(res,  JSON.parse(items.rows.toString('utf-8')))
    // }
}