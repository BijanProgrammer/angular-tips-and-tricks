import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ComponentNameToTitleCasePipe} from './component-name-to-title-case.pipe';
import {PascalCaseToTitleCasePipe} from './pascal-case-to-title-case.pipe';
import {WordsToTitleCasePipe} from './words-to-title-case.pipe';
import {NumberToPipe} from './number-to.pipe';

@NgModule({
    declarations: [ComponentNameToTitleCasePipe, PascalCaseToTitleCasePipe, WordsToTitleCasePipe, NumberToPipe],
    imports: [CommonModule],
    exports: [ComponentNameToTitleCasePipe, PascalCaseToTitleCasePipe, WordsToTitleCasePipe, NumberToPipe],
})
export class PipesModule {}
