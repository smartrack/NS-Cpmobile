import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Approve",
    moduleId: module.id,
    templateUrl: "./approve.component.html"
})
export class ApproveComponent implements OnInit {

    accounts;

    constructor(private httpClient: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe((response) => {
            this.accounts = response;
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
