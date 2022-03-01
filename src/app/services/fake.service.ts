import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FakeService {
    public doSomething(): void {
        console.log('doing something ...');
    }
}
