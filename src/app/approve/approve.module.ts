import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HttpClientModule } from "@angular/common/http";
import { ApproveRoutingModule } from "./approve-routing.module";
import { ApproveComponent } from "./approve.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ApproveRoutingModule,
        HttpClientModule
    ],
    declarations: [
        ApproveComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ApproveModule { }
