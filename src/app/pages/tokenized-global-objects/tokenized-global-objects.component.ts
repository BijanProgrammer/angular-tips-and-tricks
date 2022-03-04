import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-tokenized-global-objects',
    templateUrl: './tokenized-global-objects.component.html',
    styleUrls: ['./tokenized-global-objects.component.scss'],
    providers: [Document],
})
export class TokenizedGlobalObjectsComponent {
    @ViewChild('list') private listRef!: ElementRef<HTMLUListElement>;

    public constructor(private doc: Document) {}

    public addButtonClickHandler(): void {
        const item = this.doc.createElement('li');
        item.innerHTML = `Item #${this.listRef.nativeElement.childElementCount + 1}`;

        this.listRef.nativeElement.appendChild(item);
    }
}
