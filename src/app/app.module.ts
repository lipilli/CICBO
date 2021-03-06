import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MDBBootstrapModule, ModalModule} from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MenuButtonComponent } from './layout/menu-button/menu-button.component';
import { NavElementComponent } from './layout/nav-element/nav-element.component';
import { SmallButtonComponent } from './layout/small-button/small-button.component';
import { HomeComponent } from './pages/main-pages/home/home.component';
import { GuestsComponent } from './pages/main-pages/guests/guests.component';
import { RoomsComponent } from './pages/main-pages/rooms/rooms.component';
import { AboutComponent } from './pages/main-pages/about/about.component';
import { LegalNoticeComponent } from './pages/main-pages/legal-notice/legal-notice.component';
import { RouterModule } from '@angular/router';
import { GdprComponent } from './pages/main-pages/gdpr/gdpr.component'
import { AppRoutingModule } from "./app-routing.module";
import { StaffComponent } from './pages/main-pages/staff/staff.component';
import { AlarmComponent } from './pages/main-pages/alarm/alarm.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { ContentFixedSizeComponent } from './layout/content-fixed-size/content-fixed-size.component';
import { NewGuestComponent } from './pages/new-guest/new-guest.component';
import { NewStaffComponent } from './pages/new-staff/new-staff.component';
import { FindGuestsComponent } from './pages/find-guests/find-guests.component';
import { FindStaffComponent } from './pages/find-staff/find-staff.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {ApplicationModule} from "@angular/core";
import {AlarmService, GuestService, RoomService, StaffService} from "../typescript-angular-client-generated";
import { TableDetailsComponent } from './table-details/table-details.component';
import {ApiModule, BASE_PATH} from "../typescript-angular-client-generated";
import {BreadcrumbModule} from "angular-crumbs";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContactListService} from "./services/contact-list/contact-list.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MenuButtonComponent,
    NavElementComponent,
    SmallButtonComponent,
    HomeComponent,
    GuestsComponent,
    RoomsComponent,
    AboutComponent,
    LegalNoticeComponent,
    GdprComponent,
    StaffComponent,
    AlarmComponent,
    PageContentComponent,
    ContentFixedSizeComponent,
    NewGuestComponent,
    NewStaffComponent,
    FindGuestsComponent,
    FindStaffComponent,
    ContactListComponent,
    TableDetailsComponent,
  ],
  exports:[NavigationComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ApplicationModule,
    ApiModule,
    ModalModule.forRoot(),
    BreadcrumbModule,
    NgbModule

  ],
  providers: [
    AlarmService,
    GuestService,
    RoomService,
    StaffService,
    ContactListService,

    {provide: BASE_PATH, useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }


