import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/app.categorylist';
import { CategoryService } from './categories/app.categories.service';
import { CompetitionListComponent } from './competitions/app.competitionlist';
import { CompetitionFormComponent } from './competitions/app.competitionform';
import { ApplicationRoutes } from "./app.routes";
import { CategoryFormComponent } from "app/categories/app.categoryFormComponent";
import { VoteComponent } from "app/vote/app.vote.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CompetitionListComponent,
    CompetitionFormComponent,
    CategoryFormComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ApplicationRoutes.routes)
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
