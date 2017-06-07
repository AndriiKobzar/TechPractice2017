import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Competition} from './app.competition';
import {UrlHelper} from '../common/UrlHelper';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CompetitionService {

	private ALL = UrlHelper.BaseUrl + "/api/competitions/all";
	private createURL = UrlHelper.BaseUrl + '/api/competitions/create';

	constructor(private http: Http) {

	}

	getCompetitions(): Observable<Competition[]> {
		return this.http.get(this.ALL)
			.map((res: Response) => res.json() as Competition[])
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	createCompetition(competition: Competition): Observable<Competition> {
		const options = new Headers();
		if (localStorage.getItem("GTOKEN")) {
			options.set("Social-Type", "Google");
			options.set("Token", localStorage.getItem("GTOKEN"))
		} else if (localStorage.getItem("GTOKEN")) {
			options.set("Social-Type", "Facebook");
			options.set("Token", localStorage.getItem("FBTOKEN"))
		}
		return this.http.post(this.createURL, competition, {headers: options})
			.map((res: Response) => res.json() as Competition);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body;
	}

	private handleError(error: Response | any) {
		return Observable.throw(error);
	}
}
