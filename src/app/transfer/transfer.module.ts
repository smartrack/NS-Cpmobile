import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { HttpClientModule } from "@angular/common/http";
import { ExpensesChartComponent } from "./expenses/expenses-chart.component";
import { TransactionsListComponent } from "./transaction-list/transactions-list.component";
import { TransferRoutingModule } from "./transfer-routing.module";
import { TransferComponent } from "./transfer.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TransferRoutingModule,
        HttpClientModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        TransferComponent,
        ExpensesChartComponent,
        TransactionsListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TransferModule { }
