import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchBookComponent } from './research-book/research-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResearchDialogBoxComponent } from './research-dialog-box/research-dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewResearchComponent } from './new-research/new-research.component';
import { ResearchBookDashbordComponent } from './research-book-dashbord/research-book-dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule,  HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RouterModule } from '@angular/router';
import { BharatLawComponent } from './bharat-law/bharat-law.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './user-login/user-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserOnNavComponent } from './user-on-nav/user-on-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserRegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    ResearchBookComponent,
    ResearchDialogBoxComponent,
    NewResearchComponent,
    ResearchBookDashbordComponent,
    SidebarComponent,
    SearchComponent,
    SearchResultComponent,
    BharatLawComponent,
    UserOnNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    NgToastModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
