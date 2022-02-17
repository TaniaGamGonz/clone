import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserGalleryComponent } from './components/user-gallery/user-gallery.component';
import { UserRoutingModule } from './user-routing.module';
import { UserHeaderDropdownComponent } from './components/user-header-dropdown/user-header-dropdown.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { UserCloseAccountComponent } from './components/user-close-account/user-close-account.component';



@NgModule({
  declarations: [UserComponent, UserHeaderComponent, UserGalleryComponent, UserHeaderDropdownComponent, UserEditComponent, UserSettingsComponent, UserPasswordComponent, UserCloseAccountComponent],
  imports: [
    CoreModule,
    UserRoutingModule,
    ClickOutsideModule,
    FormsModule
  ]
})
export class UserModule { }
