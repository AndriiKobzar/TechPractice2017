import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router"

import {AppComponent} from './app.component';
import {CategoryListComponent} from './categories/app.categorylist';
import {CategoryService} from './categories/app.categories.service';
import {CompetitionListComponent} from './competitions/app.competitionlist';
import {CompetitionFormComponent} from './competitions/app.competitionform';
import {ApplicationRoutes} from "./app.routes";

import {CategoryFormComponent} from "app/categories/app.categoryFormComponent";
import {VoteComponent} from "app/vote/app.vote.component";

import {GooglePlusLoginService} from "app/google/google-login.service";
import {FacebookLoginService} from "app/facebook/facebook-login.service";
import {FacebookService} from "ng2-facebook-sdk/dist/esm";
import {SocialLoginComponent} from "app/social-login/social-login/social-login.component";
import {VoteService} from "./vote/app.votes.service";
import {CompetitorsService} from "./competitors/app.cometitors.service";
import {CompetitorFormComponent} from "./competitors/app.competitor.component";


@NgModule({
	declarations: [
		AppComponent,
		CategoryListComponent,
		CompetitionListComponent,
		CompetitionFormComponent,
		CategoryFormComponent,
		VoteComponent,
		SocialLoginComponent,
		CompetitorFormComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ApplicationRoutes.routes)
	],
	providers: [CategoryService,
				GooglePlusLoginService,
				FacebookLoginService,
				FacebookService,
				VoteService, CompetitorsService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
