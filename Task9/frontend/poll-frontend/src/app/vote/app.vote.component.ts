import {Component, OnInit} from "@angular/core";
import {Competitor} from "app/competitors/app.competitor";
import {CompetitorsService} from "app/competitors/app.cometitors.service";
import {ActivatedRoute} from "@angular/router";
import {VoteService} from "app/vote/app.votes.service";

@Component({
	selector: 'app-vote',
	templateUrl: './app.vote.html',
	styleUrls: ['./app.vote.css'],
	providers: [CompetitorsService, VoteService]
})
export class VoteComponent implements OnInit {
	competitors: Competitor[];
categoryId: number;
	constructor(private route: ActivatedRoute,
				private competitorsService: CompetitorsService,
				private voteService: VoteService) {

	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.categoryId = +params["categoryId"];
			this.competitorsService.getAll(params["competitionId"]).subscribe((competitors) => {
				this.competitors = competitors;
			})
		});
	}

	vote(competitorId: number) {
		this.voteService.vote({categoryId:this.categoryId, competitorId: competitorId}).subscribe();
	}
}
