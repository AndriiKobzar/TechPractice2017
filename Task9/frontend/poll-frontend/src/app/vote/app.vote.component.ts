import { Component, OnInit } from "@angular/core";
import { Competitor } from "app/competitors/app.competitor";
import { CompetitorsService } from "app/competitors/app.cometitors.service";
import { ActivatedRoute } from "@angular/router";
import { VoteService } from "app/vote/app.votes.service";

@Component({
    selector: 'app-vote',
    templateUrl: './app.vote.html',
    providers: [CompetitorsService]
})
export class VoteComponent implements OnInit {
    competitors: Competitor[];
    constructor(private route: ActivatedRoute,
    private competitorsService: CompetitorsService,
    private votesService: VoteService) {

    }

    ngOnInit() {
        this.route.params.subscribe((params)=>{
        this.competitorsService.getAll(params["id"]).subscribe((competitors)=>{
            this.competitors = competitors;
        })});
    }

    vote() {

    }
}