import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessageComponent } from "../shared/message/message.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        MessageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
