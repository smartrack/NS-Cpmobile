import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { View } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Payment",
    moduleId: module.id,
    templateUrl: "./payment.component.html",
    styles: [
        `
        .tile{
            background-color:#00bcd4;
            padding:20;
            height: 120;
            margin-right:15;
            font-size:14px;
        }
        .blue{
            background-color:#039be5;
        }
        .pink{
            background-color:#e91e63;
        }
        .green{
            background-color:#4caf50;
        }
        .yellow{
            background-color:#ffeb3b;
        }
        .orange{
            background-color:#ff9800;
        }
        `
    ]
})
export class PaymentComponent implements OnInit {

    messageTxt: string;

    @ViewChild("toaster") toaster: ElementRef;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    animateToaster() {
        const toaster = this.toaster.nativeElement as View;
        toaster.animate({
            opacity: 1,
            translate: { x: 0, y: -50 },
            duration: 100,
            curve: AnimationCurve.easeInOut
        }).then(() => {
            setTimeout(() => {
                toaster.animate({
                    opacity: 0,
                    translate: { x: 0, y: 0 },
                    duration: 50,
                    curve: AnimationCurve.linear
                });
            }, 2000);

        });
    }

    handleTap(arg: string) {
        this.animateToaster();
        this.messageTxt = `Tile ${arg} tap!!!`;
    }
}
