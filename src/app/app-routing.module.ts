import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { InputComponent } from "./shared/input/input.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "dashboard", loadChildren: "~/app/dashboard/dashboard.module#DashboardModule"},
    { path: "approve", loadChildren: "~/app/approve/approve.module#ApproveModule" },
    { path: "account", loadChildren: "~/app/account/account.module#AccountModule" },
    { path: "deposit", loadChildren: "~/app/deposit/deposit.module#DepositModule" },
    { path: "transfer", loadChildren: "~/app/transfer/transfer.module#TransferModule" },
    { path: "pay", loadChildren: "~/app/pay/pay.module#PayModule" },
    { path: "payment", loadChildren: "~/app/payment/payment.module#PaymentModule" },
    { path: "users", loadChildren: "~/app/users/users.module#UsersModule" }
];

@NgModule({
    declarations: [LoginComponent, InputComponent],
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
