import {Routes} from "@angular/router";
import {CompetitionListComponent} from './competitions/app.competitionlist'
import {CategoryListComponent} from './categories/app.categorylist'
import {CompetitionFormComponent} from './competitions/app.competitionform'
import {CategoryFormComponent} from "app/categories/app.categoryFormComponent";
import {VoteComponent} from "app/vote/app.vote.component";
import {CompetitorFormComponent} from "./competitors/app.competitor.component";


export class ApplicationRoutes {
	public static routes: Routes = [
		{
			path: '',
			component: CompetitionListComponent
		},
		{
			path: 'categories/:id',
			component: CategoryListComponent
		},
		{
			path: 'competition/new',
			component: CompetitionFormComponent
		},
		{
			path: 'competition/:id/newcategory',
			component: CategoryFormComponent
		},
		{
			path: 'competition/:competitionId/vote/:categoryId',
			component: VoteComponent
		},
		{
			path: 'competitor/:id/new',
			component: CompetitorFormComponent
		}
	]
}
