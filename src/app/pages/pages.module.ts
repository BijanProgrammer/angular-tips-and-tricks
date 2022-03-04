import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// [TIP] Custom Path
import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';

import {HomeComponent} from './home/home.component';
import {CustomPathsComponent} from './custom-paths/custom-paths.component';
import {CustomErrorHandlingComponent} from './custom-error-handling/custom-error-handling.component';

@NgModule({
    declarations: [HomeComponent, CustomPathsComponent, CustomErrorHandlingComponent],
    imports: [CommonModule, RouterModule, ComponentsModule, PipesModule],
})
export class PagesModule {}
