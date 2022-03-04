import {Component, OnInit} from '@angular/core';
import {FakeService} from '@services/fake.service';

@Component({
    selector: 'app-lifecycles-child',
    templateUrl: './lifecycles-child.component.html',
    styleUrls: ['./lifecycles-child.component.scss'],
})
export class LifecyclesChildComponent implements OnInit {
    public constructor(private fakeService: FakeService) {
        this.fakeService.doSomeHeavyTask('constructor');
    }

    public ngOnInit(): void {
        this.fakeService.doSomeHeavyTask('ngOnInit');
    }
}
