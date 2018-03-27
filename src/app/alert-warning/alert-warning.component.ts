import { Component } from "@angular/core";

@Component({
    selector: 'app-alert-warning',
    templateUrl: './alert-warning.component.html',
    styles: [
        `
            div {
                background-color: red;
            }
            p {
                color: white
            }
        `
    ]
})
export class WarningAlertComponent {

}