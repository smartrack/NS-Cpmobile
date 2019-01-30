import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as app from "tns-core-modules/application";

@Component({
    selector: "Dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {

    @ViewChild("toaster") toaster: ElementRef;

    mainMenuItems = [
        {
            id: 1,
            icon: "&#xf0d6;",
            label: "Payment Approvals"
        },
        {
            id: 2,
            icon: "&#xf15c;",
            label: "File Approvals"
        },
        {
            id: 3,
            icon: "&#xf002;",
            label: "Positive Pay"
        },
        {
            id: 4,
            icon: "&#xf0d6;",
            label: "Check Deposit"
        }
    ];

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string): void {

        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

    }
}
