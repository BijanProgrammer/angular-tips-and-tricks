import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConsoleService {
    public readonly LOG_GET_STYLE = {
        backgroundColor: 'bisque',
        color: 'black',
    };

    public readonly LOG_PIPE_STYLE = {
        backgroundColor: 'aquamarine',
        color: 'black',
    };

    public log(message: string, options: {backgroundColor?: string; color?: string}): void {
        const {backgroundColor = 'transparent', color = 'currentColor'} = options;

        console.log(
            '%c' + message,
            `background-color: ${backgroundColor}; color: ${color}; padding: 1rem; font-size: 1.2rem;`
        );
    }

    public logGet(): void {
        this.log('Get', this.LOG_GET_STYLE);
    }

    public logPipe(): void {
        this.log('Pipe', this.LOG_PIPE_STYLE);
    }
}
