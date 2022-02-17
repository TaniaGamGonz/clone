import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Output() hideSearch: EventEmitter<any> = new EventEmitter;


  constructor() { }

  ngOnInit() {
    this.ocultSearch();
  }

  ngOnDestroy() {
    this.ocultSearch();
  }

  ocultSearch() {

  }

}
