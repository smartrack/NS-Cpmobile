import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ListViewEventData, SwipeActionsEventData } from "nativescript-ui-listview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { EventData } from "tns-core-modules/ui/page/page";
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
    selector: "Users",
    moduleId: module.id,
    templateUrl: "./users.component.html"
})
export class UsersComponent implements OnInit {

    userStore;
    activeUserList;
    inactiveUserList = [];
    activeUserTitle = "Active";
    activeTabQuery;

    constructor(private httpClient: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe((response) => {
            this.userStore = response;
            this.activeUserList = response;
            this.activeUserTitle = `Active (${this.activeUserList.length})`;
        });
    }

    handleItemSwipe($event: ListViewEventData): void {
        // $event.returnValue = 0;
        console.log("handleItemSwipe", $event.returnValue);
    }

    onSwipeCellStarted($event: SwipeActionsEventData): void {
        console.log("onSwipeCellStarted", $event.eventName, $event.swipeView, $event.view);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    handleSearchChanged($event: EventData): void {

        if (!this.userStore) {
            return;
        }
        const searchObject = $event.object as SearchBar;
        this.activeUserList = this.applyFilter(searchObject.text, this.userStore);

    }

    handleActiveUserSwipe($event: SwipeGestureEventData): void {
        console.log("swipe", $event.direction);
    }

    handleSearchSubmit($event: EventData): void {
        console.log("handleSearchSubmit", $event);
    }

    private applyFilter(query: string, items: []) {
        if (!items) {
            return [];
        }
        const filterResults = items.filter((item: any) => {
            if (item.name.indexOf(query) !== -1 || item.email.indexOf(query) !== -1) {
                return item;
            }
        });

        return filterResults;
    }

}
