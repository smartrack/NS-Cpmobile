import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { HttpClientModule } from "@angular/common/http";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        UsersRoutingModule,
        HttpClientModule
    ],
    declarations: [
        UsersComponent
    ],
    schemas: [
    ]
})
export class UsersModule { }
