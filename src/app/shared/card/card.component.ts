import { Component, Input } from "@angular/core";

@Component({
    selector: "card",
    moduleId: module.id,
    templateUrl: "./card.component.html",
    styleUrls: ["./cards.css"]
})
export class CardComponent {
    @Input() data = [];
}
