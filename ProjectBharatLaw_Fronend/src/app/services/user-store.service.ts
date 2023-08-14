import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  
private fullName$ = new BehaviorSubject<string>("");
private role$ = new BehaviorSubject<string>("");
static userId: number= 0;
private username: string  = "hello";

constructor() { }

setUsernameForStore(username: string): void {
  console.log(`username=${this.username}`);
  this.username = username;
  console.log(`username=${this.username}`);
}

getUsernameFromStore(): string | null {
  return this.username;
}
static setUserIdForStore(userId: number): void {
  //console.log(`user id=${userId}`);
  UserStoreService.userId = userId;
 // console.log(`user id=${UserStoreService.userId}`);
}

static getUserIdFromStore(): number | null {

  return UserStoreService.userId;
}

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  public getFullNameFromStore(){
    return this.fullName$.asObservable();
  }

  public setFullNameForStore(fullname:string){
    this.fullName$.next(fullname)
  }
}
