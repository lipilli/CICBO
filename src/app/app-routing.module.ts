import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/main-pages/home/home.component';
import { GuestsComponent } from './pages/main-pages/guests/guests.component';
import { RoomsComponent } from './pages/main-pages/rooms/rooms.component';
import { AboutComponent } from './pages/main-pages/about/about.component';
import { GdprComponent } from './pages/main-pages/gdpr/gdpr.component';
import { LegalNoticeComponent } from './pages/main-pages/legal-notice/legal-notice.component';
import { StaffComponent} from "./pages/main-pages/staff/staff.component";
import {AlarmComponent} from "./pages/main-pages/alarm/alarm.component";
import {NewGuestComponent} from "./pages/new-guest/new-guest.component";
import {NewStaffComponent} from "./pages/new-staff/new-staff.component";
import {FindGuestsComponent} from "./pages/find-guests/find-guests.component";
import {FindStaffComponent} from "./pages/find-staff/find-staff.component";
import {ContactListComponent} from "./pages/contact-list/contact-list.component";


const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb:"Home"} },
  { path: 'notify', component: AlarmComponent, data: { breadcrumb:"Alarm"} },
  { path: 'guests', component: GuestsComponent, data: { breadcrumb:"Guests"} },
  { path: 'employee', component: StaffComponent, data: { breadcrumb:"Staff"} },
  { path: 'rooms', component: RoomsComponent, data: { breadcrumb:"Rooms"} },
  { path: 'about', component: AboutComponent, data: { breadcrumb:"About"} },
  { path: 'gdpr', component: GdprComponent, data: { breadcrumb:"GDPR"} },
  { path: 'legal-notice', component: LegalNoticeComponent, data: { breadcrumb:"Legal Notice"} },

  { path: 'notify/find-guest', component: FindGuestsComponent, data: { breadcrumb:"Find Guest"} },
  { path: 'notify/find-staff', component: FindStaffComponent, data: { breadcrumb:"Find Staff"}},
  { path: 'notify/find-guest/contacts', component: ContactListComponent },
  { path: 'notify/find-staff/contacts', component: ContactListComponent },

  { path: 'new-guest', component: NewGuestComponent, data: { breadcrumb:"New Guest"} },
  { path: 'new-staff', component: NewStaffComponent, data: { breadcrumb:"New Staff"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

