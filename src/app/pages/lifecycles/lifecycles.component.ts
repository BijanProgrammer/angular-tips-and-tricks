import {Component} from '@angular/core';

@Component({
    selector: 'app-lifecycles',
    templateUrl: './lifecycles.component.html',
    styleUrls: ['./lifecycles.component.scss'],
})
export class LifecyclesComponent {
    public show: boolean = true;

    public toggleChildButtonClickHandler(): void {
        this.show = !this.show;
    }
}
