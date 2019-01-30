import { Component, Input } from "@angular/core";

@Component({
    selector: "expenses-chart",
    moduleId: module.id,
    templateUrl: "./expenses-chart.component.html"
})
export class ExpensesChartComponent {
    @Input() data = [];
}
