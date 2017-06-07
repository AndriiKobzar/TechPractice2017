import {Injectable, NgZone} from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';

declare const gapi: any;

@Injectable()
export class GooglePlusLoginService {
  private auth2: any;

  constructor(private ngZone: NgZone) {
    /*gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '138821107811-bteqmuan1irqe5o3brm5ec03mgrtcevn.apps.googleusercontent.com'
      }).then(() => {
        this.auth2 = gapi.auth2.getAuthInstance();
      });
    });*/
  }

  login(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const params = {
        scope: 'email profile'
      };
      this.ngZone.runOutsideAngular(() => this.auth2.signIn(params).then((googleUser: any) => {
        const authResponse = googleUser.getAuthResponse();
        this.ngZone.run(() => {
            console.log(authResponse.access_token);
            localStorage.setItem("GTOKEN", authResponse.accessToken);

            observer.next(null);
            observer.complete();
          });
      }));

    });
  }

  logout(): Observable<any> {
    const isSignedIn = this.auth2.isSignedIn.get();
    if (isSignedIn) {
      return this.apiLogOut();
    }
    return Observable.of(null);
  }

  private apiLogOut(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.auth2.signOut().then(() => {
        observer.next(null);
      });
    });
  }
}
