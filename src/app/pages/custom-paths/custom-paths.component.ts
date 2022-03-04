import {Component} from '@angular/core';

// [TIP] Custom Path
import {FakeService} from '@services/fake.service';

@Component({
    selector: 'app-custom-paths',
    templateUrl: './custom-paths.component.html',
    styleUrls: ['./custom-paths.component.scss'],
})
export class CustomPathsComponent {
    public constructor(public fakeService: FakeService) {}
}
