import {Component} from '@angular/core';

// [TIP][CUSTOM PATH]
import {FakeService} from 'src/app/services/fake.service';

@Component({
    selector: 'app-custom-paths',
    templateUrl: './custom-paths.component.html',
    styleUrls: ['./custom-paths.component.scss'],
})
export class CustomPathsComponent {
    public constructor(public fakeService: FakeService) {}
}
