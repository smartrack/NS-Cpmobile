import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { DataService } from "../shared/data.service";

@Component({
    selector: "Transfer",
    moduleId: module.id,
    templateUrl: "./transfer.component.html",
    styleUrls: ["./transfer.css"]
})
export class TransferComponent implements OnInit {

    expensesCategories = [
        {
            color: "red",
            label: "Home"
        },
        {
            color: "blue",
            label: "Auto & Transport"
        },
        {
            color: "green",
            label: "Cellular"
        },
        {
            color: "orange",
            label: "Hotel & Restaurant"
        }
    ];

    transactions = [];
    expensesChartDataEn = [];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        const dataService = new DataService();
        this.expensesChartDataEn = [
            { name: "Home", ammount: 90 },
            { name: "Auto & Transport", ammount: 76 },
            { name: "Communication", ammount: 60 },
            { name: "Hotel", ammount: 44 }
        ];
        this.transactions = dataService.getTransactions();
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
