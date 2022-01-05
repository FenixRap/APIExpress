import express, {Express} from 'express'
import {Server} from 'http'
import {UserController} from "./users/users.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {MenuController} from "./menu/menu.controller";
import {ProductsController} from "./Products/products.controller";
import {PagesController} from "./pagesController/pages.controller";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {ILogger} from "./logger/logger.interface";
import { json } from 'body-parser'
import 'reflect-metadata'
import {PrismaService} from "./database/prisma.sevice";
import {IConfigService} from "./config/config.service.interface";
import {IUserController} from "./users/user.controller.interface";



@injectable()
export class App {
    app: Express;
    server: Server;
    port: number;

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.UserController) private userController: UserController,
        @inject(TYPES.MenuController) private menuController: MenuController,
        @inject(TYPES.ProductsController) private productsController: ProductsController,
        @inject(TYPES.PagesController) private pagesController: PagesController,
        @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
        @inject(TYPES.PrismaService) private prismaService: PrismaService,
        @inject(TYPES.ConfigService) private configService: IConfigService,
    ) {
        this.app = express();
        this.port = 8000;
    }

    useMiddleware(): void {
        this.app.use(json());
    }

    useRoutes(): void {
        this.app.use('/users', this.userController.router);
        this.app.use('/products', this.productsController.router);
    }

    useExeptionFilters(): void {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
    }

    public async init(): Promise<void> {
        this.useMiddleware();
        this.useRoutes();
        this.useExeptionFilters();
        await this.prismaService.connect()
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
    }

    public close(): void {
        this.server.close();
    }
}