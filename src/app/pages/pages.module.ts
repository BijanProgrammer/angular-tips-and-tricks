import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

// [TIP] Custom Path
import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';

import {HomeComponent} from './home/home.component';
import {CustomPathsComponent} from './custom-paths/custom-paths.component';
import {CustomErrorHandlingComponent} from './custom-error-handling/custom-error-handling.component';
import {VirtualScrollComponent} from './virtual-scroll/virtual-scroll.component';

@NgModule({
    declarations: [HomeComponent, CustomPathsComponent, CustomErrorHandlingComponent, VirtualScrollComponent],
    imports: [CommonModule, RouterModule, ScrollingModule, ComponentsModule, PipesModule],
})
export class PagesModule {}
