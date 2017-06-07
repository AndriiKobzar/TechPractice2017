import {Component, OnInit} from "@angular/core";
import {Competitor} from "app/competitors/app.competitor";
import {CompetitorsService} from "./app.cometitors.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: "app-competitor-form",
	templateUrl: "./app-competitor-form.html",
	styleUrls: ["./app.competitor.css"]
})
export class CompetitorFormComponent implements OnInit {
	competitor: Competitor;

	constructor( private activeRoute: ActivatedRoute,
		private competitorsService: CompetitorsService) {

	}

	createNewCompetitor() {
		this.competitorsService.createCompetitor(this.competitor).subscribe();
	}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((params)=>{
			this.competitor = new Competitor(0,"","",1,"",+params["id"]);
		});
	}
}
