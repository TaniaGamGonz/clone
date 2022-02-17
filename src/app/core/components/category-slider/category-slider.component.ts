import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent implements OnInit {

  constructor() { }

  categories = [
    {name: 'Latest', id:1},
    {name: 'Wallpapers', id:2},
    {name: 'Textures & Patterns', id:3},
    {name: 'Nature', id:4},
    {name: 'Weather', id:5},
    {name: 'Category 1', id:6},
    {name: 'Category 2', id:7},
    {name: 'Category 3', id:8},
    {name: 'Category 4', id:9},
    {name: 'Category 5', id:10},
    {name: 'Category 6', id:11},
    {name: 'Category 7', id:12},
    {name: 'Category 8', id:13},
    {name: 'Category 9', id:14},
    {name: 'Category 10', id:15},
    {name: 'Category 11', id:16},
    {name: 'Category 12', id:17}
  ]


  ngOnInit() {
  }

}
