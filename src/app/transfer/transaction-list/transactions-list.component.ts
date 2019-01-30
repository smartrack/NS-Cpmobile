import { Component, Input, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/directives/dialogs";

import { DateService } from "~/app/shared/date.service";
import { DataService } from "../../shared/data.service";
import { ICompany } from "../../shared/interfaces";

@Component({
    selector: "transactions-list",
    moduleId: module.id,
    templateUrl: "./transactions-list.component.html",
    styleUrls: ["./transactions-list.css"]
})
export class TransactionsListComponent {
    @Input() transactions = [];

    data: DataService;
    dateFormat: DateService;
    companies: Array<ICompany>;
    categoriesIcons: {};

    currentLanguage = "en";

    constructor(
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef
    ) {
        this.data = new DataService();
        this.dateFormat = new DateService();

        this.companies = this.data.getCompanies();
        this.categoriesIcons = this.data.getCategoriesIcons();
    }

    templateSelector(item) {
        return item.itemType;
    }

    getCompany(id) {
        return this.companies.find((i) => i.id === id);
    }

    getHeaderText(value: Date) {
        return this.dateFormat.shortDate(value, this.currentLanguage);
    }

    mathAbs(value: number) {
        return Math.abs(value);
    }

    getBadgeIcon(id: string) {
        return this.categoriesIcons[id];
    }
}
