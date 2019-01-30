import { Component, Input } from "@angular/core";

@Component({
    selector: "Message",
    template: `
        <Label bottom="0" [text]="text"></Label>
    `
})

export class MessageComponent {
    @Input() text: string;
}
