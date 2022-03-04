import {AfterViewInit, Component, OnDestroy} from '@angular/core';

import {NumberToPipeOutput} from 'src/app/pipes/number-to.pipe';
import {ConsoleService} from '@services/console.service';

@Component({
    selector: 'app-good-old-pipe',
    templateUrl: './good-old-pipe.component.html',
    styleUrls: ['./good-old-pipe.component.scss'],
})
export class GoodOldPipeComponent implements AfterViewInit, OnDestroy {
    public console = console;
    public NumberToPipeOutput = NumberToPipeOutput;

    public value: number = 23;
    public randomNumber: number = 23;

    private intervalId: number | null = null;

    public constructor(public consoleService: ConsoleService) {}

    public get binaryValue(): string {
        this.consoleService.logGet();
        return this.value.toString(2);
    }

    public ngAfterViewInit(): void {
        this.startTimer();
    }

    public ngOnDestroy(): void {
        if (this.intervalId !== null) clearInterval(this.intervalId);
    }

    private startTimer(): void {
        this.intervalId = setInterval(() => {
            this.randomNumber = Math.floor(Math.random() * 100);
        }, 500);
    }
}
