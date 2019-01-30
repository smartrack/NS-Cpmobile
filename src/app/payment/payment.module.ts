import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PaymentRoutingModule
    ],
    declarations: [
        PaymentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PaymentModule { }
