import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CustomPathsComponent} from './pages/custom-paths/custom-paths.component';
import {CustomErrorHandlingComponent} from './pages/custom-error-handling/custom-error-handling.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'custom-paths', component: CustomPathsComponent},
    {path: 'custom-error-handling', component: CustomErrorHandlingComponent},
    {path: '*', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
