import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { BrowserModule } from "@angular/platform-browser";

platformBrowserDynamic()
.bootstrapModule(AppModule)
.catch((err)=> console.error(err))
