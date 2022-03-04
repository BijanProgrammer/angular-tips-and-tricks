import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public demos: {title: string; link: string}[] = [
        {title: 'Custom Paths', link: 'custom-paths'},
        {title: 'Custom Error Handling', link: 'custom-error-handling'},
        {title: 'Virtual Scroll', link: 'virtual-scroll'},
        {title: 'Dynamic Render', link: 'dynamic-render'},
        {title: 'Good Old Pipe', link: 'good-old-pipe'},
        {title: 'Tokenized Global Objects', link: 'tokenized-global-objects'},
        {title: 'Lifecycles', link: 'lifecycles'},
    ];
}
