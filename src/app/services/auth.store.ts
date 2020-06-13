import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
}
