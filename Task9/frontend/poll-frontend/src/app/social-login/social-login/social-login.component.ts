import { Component, OnInit } from '@angular/core';
import { GooglePlusLoginService } from "app/google/google-login.service";
import { FacebookLoginService } from "app/facebook/facebook-login.service";

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css'],
  providers: [GooglePlusLoginService, FacebookLoginService]
})
export class SocialLoginComponent implements OnInit {

  constructor(private gpService: GooglePlusLoginService, private fbService: FacebookLoginService) { }

  ngOnInit() {
  }
  loginWithGoogle() {
    this.gpService.login().subscribe();
  }
  loginWithFacebook() {
    this.fbService.login().subscribe();
  }
}
