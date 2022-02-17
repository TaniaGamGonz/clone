import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }


  //settings
  selectedItems = [];
  dropdownSettings = {};
  selectedItems2 = [];
  dropdownSettings2 = {};

  categories = ["pepe"];
  tags = ["telefono"];


  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      text: 'Categories...',
      selectAllText: "Selecciona Todos",
      unSelectAllText: "Deselecciona Todos",
      enableSearchFilter: true,
      classes: "dropdown myclass custom-class"
    };

    this.dropdownSettings2 = {
      singleSelection: false,
      enableCheckAll: false,
      text: 'Tags...',
      selectAllText: "Selecciona Todos",
      unSelectAllText: "Deselecciona Todos",
      enableSearchFilter: true,
      classes: "dropdown myclass custom-class"
    };

  }

}
