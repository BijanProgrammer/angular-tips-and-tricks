import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-multiply',
    templateUrl: './multiply.component.html',
    styleUrls: ['./multiply.component.scss'],
})
export class MultiplyComponent {
    @Input() public left: string = '0';
    @Input() public right: string = '0';
}
