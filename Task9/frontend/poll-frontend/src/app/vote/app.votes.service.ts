import {Injectable} from '@angular/core'
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Vote} from "app/vote/vote";
import {UrlHelper} from "../common/UrlHelper";

@Injectable()
export class VoteService {
	private GET_ALL = UrlHelper.BaseUrl + '/api/votes?categoryId={category}';
	private VOTE = UrlHelper.BaseUrl + '/api/vote';

	constructor(private http: Http) {

	}

	getAll(categoryId: number): Observable<Vote[]> {
		return this.http.get(this.GET_ALL.replace("{category}", categoryId.toString())).map((res: Response) => {
			return res.json() as Vote[];
		});
	}

	vote(model: any): Observable<any> {
		return this.http.post(this.VOTE, model);
	}
}
