import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginStatus } from 'ng2-facebook-sdk';

import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class FacebookLoginService {
    constructor(private facebook: FacebookService) {
        const initParams: InitParams = {
            appId: '1877313075852531',
            xfbml: true,
            version: 'v2.8'
        };
        facebook.init(initParams);
    }

    login(): Observable<any> {
        const loginOptions = {
            scope: 'email',
            return_scopes: true
        };

        //  TODO: Handle errors
        return Observable.create((observer: Observer<any>) => {
            this.facebook.login(loginOptions)
                .then((response: LoginResponse) => {
                    console.log(response.authResponse.accessToken);
                    localStorage.setItem("TOKEN", response.authResponse.accessToken);
                    localStorage.setItem("TYPE", "FACEBOOK");
                });
        });
    }

    logout(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this.facebook.getLoginStatus().then((loginStatus: LoginStatus) => {
                if (loginStatus.status === 'connected') {
                    this.facebook.logout();
                    observer.next(null);
                    observer.complete();
                }
            });
        });
    }
}
