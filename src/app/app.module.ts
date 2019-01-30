import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BottomNavigationComponent } from "./shared/bottom-navigation/bottom-navigation.component";
import { CardComponent } from "./shared/card/card.component";
import { CardsSlideComponent } from "./shared/card/slide/cards-slide.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        BottomNavigationComponent,
        CardComponent,
        CardsSlideComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
