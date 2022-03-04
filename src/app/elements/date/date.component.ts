import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
})
export class DateComponent implements AfterViewInit, OnDestroy {
    @Input() public onlyTime: string = 'false';

    public date: Date = new Date();

    private intervalId: number | null = null;

    public get onlyShowTime(): boolean {
        return !!JSON.parse(this.onlyTime);
    }

    public ngAfterViewInit(): void {
        this.startTimer();
    }

    public ngOnDestroy(): void {
        if (this.intervalId !== null) clearInterval(this.intervalId);
    }

    private startTimer(): void {
        this.intervalId = setInterval(() => {
            this.date = new Date();
        }, 1000);
    }
}
