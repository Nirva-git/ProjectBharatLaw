import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from './../helpers/validationform';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from 'src/app/services/user-store.service';
import { User } from '../user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class LoginComponent implements OnInit {
loginUser() {
throw new Error('Method not implemented.');
}
user1: User= User.getInstance();
  public loginForm!: FormGroup;
  errorMessage: string= " "; // New property for storing error message
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  user: any;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    private userStore: UserStoreService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          //console.log(res.message);
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          //console.log(res.userId)
           // Extract userId and username from the response
        const userId = res.userId;
        this.user1.Id=res.userId;
          this.user1.Username= res.username;
        const username = res.username;
        console.log("oldusername"+res.username);

        // Store userId and username in your userStore service
        UserStoreService.setUserIdForStore(userId);
        console.log(res.userName)

        this.userStore.setUsernameForStore(username);

          const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          
          this.navigateToDashboard(userId);
          // this.router.navigate(['dashboard'])
        },
        // error: (err) => {
        //   this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
        //   console.log(err);
        // },
        error: (err) => {
          this.errorMessage = "Wrong username or password"; // Set error message
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
  navigateToDashboard(userId: number): void {
    this.router.navigate(['dashboard', userId]);
  }
  navigateToRegistration() {
    this.router.navigate(['/user-registration']);
}
navigateToResetPassword() {
  this.router.navigate(['/reset-password']);
}






}