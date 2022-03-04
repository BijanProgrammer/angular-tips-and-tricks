import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AddComponent} from '../../elements/add/add.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {MultiplyComponent} from '../../elements/multiply/multiply.component';
import {DateComponent} from '../../elements/date/date.component';

@Component({
    selector: 'app-dynamic-render',
    templateUrl: './dynamic-render.component.html',
    styleUrls: ['./dynamic-render.component.scss'],
})
export class DynamicRenderComponent {
    public content: SafeHtml = '';

    public constructor(private injector: Injector, private domSanitizer: DomSanitizer) {
        this.definedCustomElements();
    }

    public addButtonClickHandler(): void {
        this.content = this.domSanitizer.bypassSecurityTrustHtml(`<add-element left="2" right="3"></add-element>`);
    }

    public multiplyButtonClickHandler(): void {
        this.content = this.domSanitizer.bypassSecurityTrustHtml(
            `<multiply-element left="2" right="3"></multiply-element>`
        );
    }

    public timeButtonClickHandler(): void {
        this.content = this.domSanitizer.bypassSecurityTrustHtml(`
            <app-date></app-date>
            <app-date only-time="true"></app-date>
        `);
    }

    private definedCustomElements(): void {
        if (!customElements.get('add-element'))
            customElements.define('add-element', createCustomElement(AddComponent, {injector: this.injector}));

        if (!customElements.get('multiply-element'))
            customElements.define(
                'multiply-element',
                createCustomElement(MultiplyComponent, {injector: this.injector})
            );

        if (!customElements.get('app-date'))
            customElements.define('app-date', createCustomElement(DateComponent, {injector: this.injector}));
    }
}
