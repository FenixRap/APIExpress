import {NextFunction, Request, Response} from "express";

export interface iExeptionFilter {
    catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}