import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { JobsRecruitingComponent } from './jobs-recruiting/jobs-recruiting.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    RegistrationComponent,
    ReviewsComponent,
    JobsRecruitingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
