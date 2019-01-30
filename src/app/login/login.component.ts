import { Component, OnInit, Renderer2 } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, private renderer: Renderer2) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onTextChange(value): void {
        console.log(value);
    }

    loginSubmit(form): void {
        console.log("do Submit form", form);
    }

    login(): void {
        console.log("do login");
        this.routerExtensions.navigate(["dashboard"], {
            transition: {
                name: "fade"
            }
        });
    }

    goToPage(path: string): void {
        this.routerExtensions.navigate([path], {
            transition: {
                name: "fade"
            }
        });
    }
}
