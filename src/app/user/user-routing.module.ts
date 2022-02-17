import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { UserCloseAccountComponent } from './components/user-close-account/user-close-account.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'profile', component: UserSettingsComponent,
  children: [
    { path: '', redirectTo: 'edit' },
    { path: 'edit', component: UserEditComponent },
    { path: 'password', component: UserPasswordComponent },
    { path: 'cancel', component: UserCloseAccountComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
