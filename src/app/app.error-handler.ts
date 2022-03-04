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
            const message = error.message.toLowerCase();

            if (message.includes('license')) this.handleLicenseError(error);
            else if (message.includes('ogma')) this.handleOgmaError(error);
            else if (!message.includes('mapboxgl')) super.handleError(anyError);
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
