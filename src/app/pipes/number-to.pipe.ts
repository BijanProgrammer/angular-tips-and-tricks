import {Pipe, PipeTransform} from '@angular/core';

export enum NumberToPipeOutput {
    DECIMAL,
    BINARY,
    HEX,
}

@Pipe({
    name: 'numberTo',
})
export class NumberToPipe implements PipeTransform {
    public transform(n: number, output: NumberToPipeOutput, padMaxLength: number = 0): string {
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
