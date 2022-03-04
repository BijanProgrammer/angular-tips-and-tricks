import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FakeService {
    public doSomething(): void {
        console.log('doing something ...');
    }

    public generateError(): void {
        throw new Error('Oh no! This is an error ...');
    }

    public doSomeHeavyTask(title: string): void {
        console.groupCollapsed(title);
        for (let i = 0; i < 5_000; i++) {
            console.log(i);
        }
        console.groupEnd();
    }
}
