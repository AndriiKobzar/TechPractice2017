import { Component, OnInit } from "@angular/core";
import { Competitor } from "app/competitors/app.competitor";

@Component({
    selector: "app-competitor-form",
    templateUrl: "app-competitor-form.html",
    styles: ["app-competitor-form.css"]
})
export class CompetitorFormComponent implements OnInit {
    competitors: Competitor[];
    // constructor(private competitorsS) {

    // }
    
    ngOnInit(): void {
        this.competitors
    }

}