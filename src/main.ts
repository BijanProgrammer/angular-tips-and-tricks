import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

if (environment.production) {
    enableProdMode();
}

const originalWarn = console.warn;
console.warn = (...data: any[]): void => {
    if (data.some((x) => x.toString().toLowerCase().includes('license'))) return;
    originalWarn(...data);
};

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
