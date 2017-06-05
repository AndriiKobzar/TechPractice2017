import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from "@angular/router"

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/app.categorylist';
import { CategoryService } from './categories/app.categories.service';
import { CompetitionListComponent } from './competitions/app.competitionlist';
import { CompetitionFormComponent } from './competitions/app.competitionform';
import { ApplicationRoutes } from "./app.routes";
import { GooglePlusLoginService } from "app/google/google-login.service";
import { SocialLoginComponent } from './social-login/social-login/social-login.component';
import { FacebookLoginService } from "app/facebook/facebook-login.service";
import { FacebookService } from "ng2-facebook-sdk/dist/esm";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CompetitionListComponent,
    CompetitionFormComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ApplicationRoutes.routes)
  ],
  providers: [CategoryService, GooglePlusLoginService, FacebookLoginService, FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
