import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewResearchComponent } from '../app/new-research/new-research.component'
import { ResearchBookDashbordComponent } from './research-book-dashbord/research-book-dashbord.component';
import { ResearchBookComponent } from './research-book/research-book.component';
import { BharatLawComponent } from './bharat-law/bharat-law.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './user-login/user-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
 { path: 'welcome', component: WelcomeComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'newresearch', component: NewResearchComponent },
  {
    path: 'dashboard/:userId',
    component: BharatLawComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
