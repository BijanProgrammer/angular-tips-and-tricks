import {Component} from '@angular/core';
import {NumberToPipeOutput} from '../../pipes/number-to.pipe';

@Component({
    selector: 'app-virtual-scroll',
    templateUrl: './virtual-scroll.component.html',
    styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent {
    public NumberToPipeOutput = NumberToPipeOutput;

    private readonly ITEMS_COUNT: number = 1000;
    public readonly ID_PAD_MAX_LENGTH: number = this.ITEMS_COUNT.toString().length;
    public readonly BINARY_PAD_MAX_LENGTH: number = this.ITEMS_COUNT.toString(2).length;
    public readonly HEX_PAD_MAX_LENGTH: number = this.ITEMS_COUNT.toString(16).length;

    public items: number[] = Array(this.ITEMS_COUNT)
        .fill(0)
        .map((_, i) => i + 1);
}
