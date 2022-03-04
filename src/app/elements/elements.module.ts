import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddComponent} from './add/add.component';
import {MultiplyComponent} from './multiply/multiply.component';
import {DateComponent} from './date/date.component';

@NgModule({
    declarations: [AddComponent, MultiplyComponent, DateComponent],
    imports: [CommonModule],
})
export class ElementsModule {}
