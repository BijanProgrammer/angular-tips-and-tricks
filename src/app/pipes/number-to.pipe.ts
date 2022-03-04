import {Pipe, PipeTransform} from '@angular/core';
import {ConsoleService} from '@services/console.service';

export enum NumberToPipeOutput {
    DECIMAL,
    BINARY,
    HEX,
}

@Pipe({
    name: 'numberTo',
})
export class NumberToPipe implements PipeTransform {
    public constructor(private consoleService: ConsoleService) {}

    public transform(n: number, output: NumberToPipeOutput, padMaxLength: number = 0, log: boolean = false): string {
        if (log) this.consoleService.logPipe();
        return NumberToPipe.transformToOutput(n, output).padStart(padMaxLength, '0');
    }

    private static transformToOutput(n: number, output: NumberToPipeOutput): string {
        switch (output) {
            case NumberToPipeOutput.BINARY:
                return NumberToPipe.transformToBinary(n);
            case NumberToPipeOutput.HEX:
                return NumberToPipe.transformToHex(n);
        }

        return n.toString();
    }

    private static transformToBinary(n: number): string {
        return n.toString(2);
    }

    private static transformToHex(n: number): string {
        return n.toString(16);
    }
}
