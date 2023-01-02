import { RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export class App {
  configureRouter(config: RouterConfiguration, router) {
    config.title = "Aurelia";
    config.options.pushState = true;
    config.map([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("home/home"),
        title: "Home",
      },
      {
        route: "cadastrar",
        name: "register-product",
        moduleId: PLATFORM.moduleName("register-product/register-product"),
        title: "Cadastrar",
      },
      {
        route: "editar/:id",
        name: "edit-product",
        moduleId: PLATFORM.moduleName("edit-product/edit-product"),
        title: "Editar",
      }
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName("not-found/not-found"));
  }
}
