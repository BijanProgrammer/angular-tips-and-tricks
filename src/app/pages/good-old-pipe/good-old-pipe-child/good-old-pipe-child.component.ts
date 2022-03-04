import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-good-old-pipe-child',
    templateUrl: './good-old-pipe-child.component.html',
    styleUrls: ['./good-old-pipe-child.component.scss'],
})
export class GoodOldPipeChildComponent {
    @Input() public value!: string;
}
