import {Component} from '@angular/core';

import {FakeService} from '@services/fake.service';

@Component({
    selector: 'app-custom-error-handling',
    templateUrl: './custom-error-handling.component.html',
    styleUrls: ['./custom-error-handling.component.scss'],
})
export class CustomErrorHandlingComponent {
    public constructor(public fakeService: FakeService) {}
}
