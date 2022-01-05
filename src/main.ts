import {App} from './app'
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./users/users.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {MenuController} from "./menu/menu.controller";
import {ProductsController} from "./Products/products.controller";
import {PagesController} from "./pagesController/pages.controller";
import {Container, ContainerModule, interfaces} from "inversify";
import {ILogger} from "./logger/logger.interface";
import {TYPES} from "./types";
import {iExeptionFilter} from "./errors/exeption.filter.interface";
import {IUserController} from "./users/user.controller.interface";
import {IUserService} from "./users/user.service.interface";
import {UserService} from "./users/user.service";
import {PrismaService} from "./database/prisma.sevice";
import {UsersRepository} from "./users/users.repository";
import {IUsersRepository} from "./users/users.repository.interface";
import {ConfigService} from "./config/config.service";
import {IConfigService} from "./config/config.service.interface";
import {ProductsService} from "./Products/products.service";
import {IProductService} from "./Products/products.service.interface";
import {ProductsRepository} from "./Products/products.repository";
import {IProductsRepository} from "./Products/products.repository.interface";

export interface IBootstrapReturn {
    appContainer: Container;
    app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind)=>{
    bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
    bind<iExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
    bind<IUserController>(TYPES.UserController).to(UserController);
    bind<IUserService>(TYPES.UserService).to(UserService);
    bind<MenuController>(TYPES.MenuController).to(MenuController);
    bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope()
    bind<ProductsController>(TYPES.ProductsController).to(ProductsController);
    bind<PagesController>(TYPES.PagesController).to(PagesController);
    bind<IProductService>(TYPES.ProductsService).to(ProductsService)
    bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
    bind<IProductsRepository>(TYPES.ProductsRepository).to(ProductsRepository).inSingletonScope();
    bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope()

    bind<App>(TYPES.Application).to(App);
})

async function bootstrap(): Promise<IBootstrapReturn> {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(TYPES.Application);
    await app.init();
    return { appContainer, app };
}

export const boot = bootstrap();

