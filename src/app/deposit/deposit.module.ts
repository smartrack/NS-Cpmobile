import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// import { registerElement } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HttpClientModule } from "@angular/common/http";
import { DepositRoutingModule } from "./deposit-routing.module";
import { DepositComponent } from "./deposit.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DepositRoutingModule,
        HttpClientModule
    ],
    declarations: [
        DepositComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DepositModule {}
