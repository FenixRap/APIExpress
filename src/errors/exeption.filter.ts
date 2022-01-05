import {NextFunction, Response, Request} from "express";
import {LoggerService} from "../logger/logger.service";
import {iExeptionFilter} from "./exeption.filter.interface";
import {HTTPError} from "./http-error.class";
import {inject, injectable} from "inversify";
import {ILogger} from "../logger/logger.interface";
import {TYPES} from "../types";
import 'reflect-metadata'

@injectable()
export class ExeptionFilter implements iExeptionFilter{
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) { }
    catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction){
        if(err instanceof HTTPError){
            this.loggerService.error(`[${err.message}] Ошибка ${err.statusCode}: ${err.message} `)
            res.status(err.statusCode).send({err: err.message});

        } else {
            this.loggerService.error(`${err.message} `)
            res.status(500).send({err: err.message});

        }
    }
}