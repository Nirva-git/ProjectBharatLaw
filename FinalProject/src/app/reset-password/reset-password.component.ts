import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  user = {
    email: '',
    newPassword: '',
    confirmPassword: ''
  };

  otp: string = '';
  showOtpForm: boolean = false;
  showResetForm: boolean = false;

  requestResetPassword() {
    // Placeholder logic for demonstration purposes
    // You can implement the logic to generate and send the OTP to the user's email here
    console.log('Requesting reset password for email:', this.user.email);

    // Simulate successful OTP request, show the OTP form
    this.showOtpForm = true;
  }

  verifyOtp() {
    // Placeholder logic for demonstration purposes
    // You can implement the logic to verify the OTP entered by the user here
    console.log('Verifying OTP:', this.otp);

    // Simulate successful OTP verification, show the password reset form
    this.showResetForm = true;
    this.showOtpForm = false;
  }

  resetPassword() {
    // Placeholder logic for demonstration purposes
    // You can implement the logic to reset the user's password here
    console.log('Resetting password for email:', this.user.email);

    // Simulate successful password reset, navigate the user back to the login page
    // You can use Angular's router to navigate back to the login page
  }
}