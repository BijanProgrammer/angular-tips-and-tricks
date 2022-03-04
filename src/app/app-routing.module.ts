import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CustomPathsComponent} from './pages/custom-paths/custom-paths.component';
import {CustomErrorHandlingComponent} from './pages/custom-error-handling/custom-error-handling.component';
import {VirtualScrollComponent} from './pages/virtual-scroll/virtual-scroll.component';
import {DynamicRenderComponent} from './pages/dynamic-render/dynamic-render.component';
import {GoodOldPipeComponent} from './pages/good-old-pipe/good-old-pipe.component';
import {TokenizedGlobalObjectsComponent} from './pages/tokenized-global-objects/tokenized-global-objects.component';
import {LifecyclesComponent} from './pages/lifecycles/lifecycles.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'custom-paths', component: CustomPathsComponent},
    {path: 'custom-error-handling', component: CustomErrorHandlingComponent},
    {path: 'virtual-scroll', component: VirtualScrollComponent},
    {path: 'dynamic-render', component: DynamicRenderComponent},
    {path: 'good-old-pipe', component: GoodOldPipeComponent},
    {path: 'tokenized-global-objects', component: TokenizedGlobalObjectsComponent},
    {path: 'lifecycles', component: LifecyclesComponent},
    {path: '*', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
