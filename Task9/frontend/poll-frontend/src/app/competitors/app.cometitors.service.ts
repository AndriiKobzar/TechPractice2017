import {Injectable} from "@angular/core";
import {UrlHelper} from "app/common/UrlHelper";
import {Observable} from "rxjs/Observable";
import {Competitor} from "app/competitors/app.competitor";
import {Http, Response} from "@angular/http";

@Injectable()
export class CompetitorsService {
	private GET_ALL: string = UrlHelper.BaseUrl + "/api/competitors/all?competitionId=";
	private ADD: string = UrlHelper.BaseUrl + "/api/competitors/create";

	constructor(private http: Http) {

	}

	getAll(competitionId: number): Observable<Competitor[]> {
		return this.http.get(this.GET_ALL + competitionId).map((res: Response) => {
			return res.json() as Competitor[]
		});
	}

	createCompetitor(competitor: Competitor): Observable<Competitor> {
		return this.http.post(this.ADD, competitor).map((res: Response) => {
			return res.json() as Competitor
		});
	}
}
