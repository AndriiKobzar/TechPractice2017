import {Injectable} from '@angular/core'
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Vote } from "app/vote/vote";

@Injectable()
export class VoteService {
    private GET_ALL = 'api/votes?categoryId={category}';

    constructor(private http:Http){

    }

    getAll(categoryId: number): Observable<Vote[]>{
        return this.http.get(this.GET_ALL.replace("{category}",categoryId.toString())).map((res: Response)=> {
            return res.json() as Vote[];
        });
    }
}