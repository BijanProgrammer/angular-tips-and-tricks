import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {AppRoutingModule} from './app-routing.module';
import {AppErrorHandler} from './app.error-handler';
import {AppComponent} from './app.component';

import {ComponentsModule} from './components/components.module';
import {PagesModule} from './pages/pages.module';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ScrollingModule, AppRoutingModule, ComponentsModule, PagesModule, PipesModule],
    providers: [
        // [TIP] Custom Error Handler
        {provide: ErrorHandler, useClass: AppErrorHandler},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
