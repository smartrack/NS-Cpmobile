import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SetupItemViewArgs } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Pay",
    moduleId: module.id,
    templateUrl: "./pay.component.html",
    styles: [
        `
        .header{
            background-color:#f8f8f8;
            height:50px;
            padding:5px;
        }
        `
    ]
})
export class PayComponent implements OnInit {

    userData;

    constructor(private httpClient: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        this.httpClient.get("https://jsonplaceholder.typicode.com/todos").subscribe((response) => {
            this.userData = response;
        });
    }

    get groupByUserId(): (item: any) => any {
        return (item) => {
            return item.userId;
        };
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onSetupItemView(args: SetupItemViewArgs) {
        args.view.context.header = args.index % 5 === 0;
    }
}
