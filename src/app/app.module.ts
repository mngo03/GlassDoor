import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { JobsRecruitingComponent } from './jobs-recruiting/jobs-recruiting.component';

import { RouterModule, Routes } from '@angular/router';
import { RoutingComponentComponent } from './routing-component/routing-component.component';

import { HttpClientModule } from '@angular/common/http';
import { SingleCompanyDetailsComponent } from './single-company-details/single-company-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SingleCompanyDescriptionComponent } from './single-company-description/single-company-description.component';
import { SingleCompanyLocationsComponent } from './single-company-locations/single-company-locations.component';

//Add your routes here
const routes: Routes = [
  {path: 'company_details', component: CompanyDetailsComponent},
  {path: 'company_details/:id', component: SingleCompanyDetailsComponent},
  {path: 'company_details/description/:id', component: SingleCompanyDescriptionComponent},
  {path: 'company_details/locations/:id', component: SingleCompanyLocationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    RegistrationComponent,
    ReviewsComponent,
    JobsRecruitingComponent,
    RoutingComponentComponent,
    SingleCompanyDetailsComponent,
    SingleCompanyDescriptionComponent,
    SingleCompanyLocationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
