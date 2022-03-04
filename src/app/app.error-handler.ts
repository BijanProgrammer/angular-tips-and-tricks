import {ErrorHandler} from '@angular/core';

// [TIP] Custom Error Handler
export class AppErrorHandler extends ErrorHandler {
    public handleError(anyError: any): void {
        console.group('AppErrorHandler');

        try {
            if (!(anyError instanceof Error)) {
                console.log('this is not an error');
                return;
            }

            const error = anyError as Error;
            const name = error.name.toLowerCase();

            if (name.includes('license')) this.handleLicenseError(error);
            else if (name.includes('ogma')) this.handleOgmaError(error);
            else if (!name.includes('mapboxgl')) super.handleError(anyError);
        } finally {
            console.groupEnd();
        }
    }

    private handleLicenseError(_: Error): void {
        // ignored
    }

    private handleOgmaError(_: Error): void {
        // ignored
    }
}
