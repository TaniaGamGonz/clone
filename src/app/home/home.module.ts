import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    HomeComponent,
    HomeSearchComponent,
    HomeMenuComponent],
  imports: [
    CommonModule,
    CoreModule,

  ]
})
export class HomeModule { }
