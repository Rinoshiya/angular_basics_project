//  if app component is delared standlone true
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// if app.modules is used.

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { appModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(appModule);
