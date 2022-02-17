import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderDropdownComponent } from './components/header-dropdown/header-dropdown.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { UploadComponent } from './components/upload/upload.component';
import { RouterModule } from '@angular/router';
//import { HomeModule } from '../home/home.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';
import { ImageUploadModule } from "angular2-image-upload";




@NgModule({
  declarations: [LoginComponent, SignupComponent, HeaderComponent, SearchComponent, HeaderDropdownComponent, UploadComponent, CategorySliderComponent, GalleryComponent, ImageComponent],
  imports: [
    CommonModule,
    FormsModule,
    DragScrollModule,
    RouterModule,
    //HomeModule,
    AngularMultiSelectModule,
    ImageUploadModule.forRoot(),
  ],
  exports: [
    CommonModule,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SearchComponent,
    HeaderDropdownComponent,
    DragScrollModule,
    CategorySliderComponent,
    ImageUploadModule,
    GalleryComponent,
  ]
})
export class CoreModule { }
