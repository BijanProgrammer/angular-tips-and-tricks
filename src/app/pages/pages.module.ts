import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

// [TIP] Custom Path
import {ComponentsModule} from '../components/components.module';
import {ElementsModule} from '../elements/elements.module';
import {PipesModule} from '../pipes/pipes.module';

import {HomeComponent} from './home/home.component';
import {CustomPathsComponent} from './custom-paths/custom-paths.component';
import {CustomErrorHandlingComponent} from './custom-error-handling/custom-error-handling.component';
import {VirtualScrollComponent} from './virtual-scroll/virtual-scroll.component';
import {DynamicRenderComponent} from './dynamic-render/dynamic-render.component';

@NgModule({
    declarations: [
        HomeComponent,
        CustomPathsComponent,
        CustomErrorHandlingComponent,
        VirtualScrollComponent,
        DynamicRenderComponent,
    ],
    imports: [CommonModule, RouterModule, ScrollingModule, ComponentsModule, ElementsModule, PipesModule],
})
export class PagesModule {}
