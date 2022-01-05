import {NextFunction, Request, Response} from "express";

export interface IProductsController {
    createItem:(req: Request, res: Response, next: NextFunction) => void;
}