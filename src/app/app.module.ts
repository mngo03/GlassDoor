import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { JobsRecruitingComponent } from './jobs-recruiting/jobs-recruiting.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { EmailsAlertsComponent } from './emails-alerts/emails-alerts.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { EmailPreferencesComponent } from './email-preferences/email-preferences.component';
import { PasswordComponent } from './password/password.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CreditCardInfoComponent } from './credit-card-info/credit-card-info.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import { CurrentSubscriptionPlanComponent } from './current-subscription-plan/current-subscription-plan.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCompanyDetailsComponent } from './single-company-details/single-company-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SingleCompanyDescriptionComponent } from './single-company-description/single-company-description.component';
import { SingleCompanyLocationsComponent } from './single-company-locations/single-company-locations.component';
import { SingleCompanyBenefitsComponent } from './single-company-benefits/single-company-benefits.component';

//Add your routes here
const routes: Routes = [
  {path: 'company_details', component: CompanyDetailsComponent},
  {path: 'company_details/:id', component: SingleCompanyDetailsComponent},
  {path: 'company_details/description/:id', component: SingleCompanyDescriptionComponent},
  {path: 'company_details/locations/:id', component: SingleCompanyLocationsComponent},
  {path: 'company_details/benefits/:id', component: SingleCompanyBenefitsComponent},
  {path:'account_settings', component:BasicInfoComponent},
  {path:'password_reset', component:PasswordComponent},
  {path: 'account_info', component:UserSettingsComponent},
  {path:'notifications',component:EmailsAlertsComponent},
  {path:'payment_settings', component:BillingAddressComponent},
  {path:'subscriptions', component:CurrentSubscriptionPlanComponent},
  {path:'add_subscription',component:SubscriptionsComponent}
];  




@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    RegistrationComponent,
    ReviewsComponent,
    JobsRecruitingComponent,
    UserSettingsComponent,

    RoutingComponentComponent,
    SingleCompanyDetailsComponent,
    SingleCompanyDescriptionComponent,
    SingleCompanyLocationsComponent,
    SingleCompanyBenefitsComponent,
    
    PasswordComponent,
    PaymentInfoComponent,
    SubscriptionsComponent,
    EmailPreferencesComponent,
    EmailsAlertsComponent,
    PaymentMethodsComponent,
    BillingAddressComponent,
    CreditCardInfoComponent,
    CurrentSubscriptionPlanComponent,
    SubscriptionsComponent,
    BasicInfoComponent,
    AccountInfoComponent,
    RoutingComponentComponent,
    SingleCompanyDetailsComponent,
    SingleCompanyDescriptionComponent


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
