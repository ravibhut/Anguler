import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { UsingaServiceComponent } from './usinga-service/usinga-service.component';
import { HTTPandObservablesComponent } from './httpand-observables/httpand-observables.component';
import { FetchDataUsingHTTPComponent } from './fetch-data-using-http/fetch-data-using-http.component';
import { HTTPErrorHandlingComponent } from './httperror-handling/httperror-handling.component';
import { RoutingandNavigationComponent } from './routingand-navigation/routingand-navigation.component';
import { WildcardRouteandRedirectingRoutesComponent } from './wildcard-routeand-redirecting-routes/wildcard-routeand-redirecting-routes.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { ParamMapObservableComponent } from './param-map-observable/param-map-observable.component';
import { OptionalRouteParametersComponent } from './optional-route-parameters/optional-route-parameters.component';
import { RelativeNavigationComponent } from './relative-navigation/relative-navigation.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { Angular6NewFeaturesandChangesComponent } from './angular6-new-featuresand-changes/angular6-new-featuresand-changes.component';
import { Updatingyourapptoangular6Component } from './updatingyourapptoangular6/updatingyourapptoangular6.component';
import { Angular8FeaturesandChangesComponent } from './angular8-featuresand-changes/angular8-featuresand-changes.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ComponentInteractionComponent,
    PipesComponent,
    ServicesComponent,
    DependencyInjectionComponent,
    UsingaServiceComponent,
    HTTPandObservablesComponent,
    FetchDataUsingHTTPComponent,
    HTTPErrorHandlingComponent,
    RoutingandNavigationComponent,
    WildcardRouteandRedirectingRoutesComponent,
    RouteParametersComponent,
    ParamMapObservableComponent,
    OptionalRouteParametersComponent,
    RelativeNavigationComponent,
    ChildRoutesComponent,
    Angular6NewFeaturesandChangesComponent,
    Updatingyourapptoangular6Component,
    Angular8FeaturesandChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
