import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { IonicStorageModule } from '@ionic/storage-angular';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
