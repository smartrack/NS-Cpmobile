
import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";

@Component({
	selector: "bottom-navigation",
	moduleId: module.id,
	templateUrl: "./bottom-navigation.component.html",
	styleUrls: ["./bottom-navigation.css"]
})
export class BottomNavigationComponent implements OnInit {
	private _activatedUrl: string;

	constructor(
		private router: Router,
		private routerExtensions: RouterExtensions) {
	}

	ngOnInit(): void {
		this._activatedUrl = "/dashboard";

		this.router.events
			.pipe(filter((event: any) => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}

	isComponentSelected(url: string): boolean {
		return this._activatedUrl === url;
	}

	onNavItemTap(navItemRoute: string): void {
		this.routerExtensions.navigate([navItemRoute], {
			transition: {
				name: "fade"
			},
			clearHistory: true
		});

		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.closeDrawer();
	}
}
