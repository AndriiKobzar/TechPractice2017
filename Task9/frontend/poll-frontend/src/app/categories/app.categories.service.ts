import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './app.category';
import { UrlHelper } from '../common/UrlHelper'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private getCategoriesUrl = UrlHelper.BaseUrl + '/api/categories/all?competitionId=';
    private createCategoryUrl = UrlHelper.BaseUrl + '/api/categories/create';
    constructor(private http: Http) {

    }
    getCategories(competitionId: Number): Observable<Category[]> {
        return this.http.get(this.getCategoriesUrl + competitionId.toString())
            .map((res: Response) => res.json() as Category[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    createCategory(category: Category): Observable<Category> {
        return this.http.post(this.createCategoryUrl, category)
            .map((res: Response) => res.json() as Category)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}