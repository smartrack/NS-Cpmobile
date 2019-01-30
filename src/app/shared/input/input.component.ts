import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from "@angular/core";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { EventData, View } from "tns-core-modules/ui/page/page";

@Component({
    selector: "PhxInput",
    moduleId: module.id,
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"]
})

export class InputComponent implements OnInit {

    isSecure = false;

    @Input() placeholder: string;
    @Input() label: string;
    @Input() type: string;
    @ViewChild("labelField") labelField: ElementRef<any>;

    constructor(private renderer: Renderer2) { }

    handleFocus($event: EventData): void {
        this.renderer.addClass($event.object, "focus");
        const label = this.labelField.nativeElement;
        label.animate({
            opacity: 1,
            translate: { x: 0, y : -50},
            duration: 100,
            curve: AnimationCurve.easeIn
        });
        // console.log(this.labelField);
    }

    handleBlur($event: EventData): void {
        this.renderer.removeClass($event.object, "focus");
        console.log(this.labelField.nativeElement);
    }

    ngOnInit() {
        if (this.type === "password") {
            this.isSecure = true;
        }
    }
}
