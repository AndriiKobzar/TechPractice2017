import {Component, OnInit} from "@angular/core";
import {Competitor} from "app/competitors/app.competitor";
import {CompetitorsService} from "app/competitors/app.cometitors.service";
import {ActivatedRoute} from "@angular/router";
import {VoteService} from "app/vote/app.votes.service";
import {current} from "codelyzer/util/syntaxKind";
import {Vote} from "./vote";

@Component({
	selector: 'app-vote',
	templateUrl: './app.vote.html',
	styleUrls: ['./app.vote.css'],
	providers: [CompetitorsService, VoteService]
})
export class VoteComponent implements OnInit {
	competitors: Competitor[];
	votes: any;
	categoryId: number;
	votesMap: Map<number, number>;
	constructor(private route: ActivatedRoute,
				private competitorsService: CompetitorsService,
				private voteService: VoteService) {
		this.votesMap = new Map<number, number>();
	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.categoryId = +params["categoryId"];
			this.competitorsService.getAll(params["competitionId"]).subscribe((competitors) => {
				this.competitors = competitors;
			});
			this.voteService.getAll(this.categoryId).subscribe((votings: Vote[]) => {
				this.votes = votings;
				votings.forEach((v)=>{
					if(this.votesMap.has(v.competitorId)){
						this.votesMap.set(v.competitorId, this.votesMap.get(v.competitorId)+1);
					}
					else{
						this.votesMap.set(v.competitorId, 1);
					}
				});
				console.log(this.votesMap);
			});
		});
	}

	vote(competitorId: number) {
		this.voteService.vote({categoryId: this.categoryId, competitorId: competitorId}).subscribe();
	}
}
