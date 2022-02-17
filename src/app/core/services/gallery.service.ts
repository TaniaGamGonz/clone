import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public images$ = new BehaviorSubject<Image[]>([
    {
      id: 1,
      userID: 1,
      listId: null,
      title: 'Montañas de Angmar',
      category: 'Latest',
      url: 'assets/img/mountain.jpg'
    },
    {
      id: 2,
      userID: 1,
      listId: null,
      title: 'Rivendel',
      category: 'Latest',
      url: 'assets/img/forest.jpeg'
    },    {
      id: 1,
      userID: 1,
      listId: null,
      title: 'Montañas de Angmar',
      category: 'Latest',
      url: 'assets/img/mountain.jpg'
    },
    {
      id: 2,
      userID: 1,
      listId: null,
      title: 'Rivendel',
      category: 'Latest',
      url: 'assets/img/forest.jpeg'
    },    {
      id: 1,
      userID: 1,
      listId: null,
      title: 'Montañas de Angmar',
      category: 'Latest',
      url: 'assets/img/mountain.jpg'
    },
    {
      id: 2,
      userID: 1,
      listId: null,
      title: 'Rivendel',
      category: 'Latest',
      url: 'assets/img/forest.jpeg'
    } 
,    {
  id: 1,
  userID: 1,
  listId: null,
  title: 'Montañas de Angmar',
  category: 'Latest',
  url: 'assets/img/mountain.jpg'
},
{
  id: 2,
  userID: 1,
  listId: null,
  title: 'Rivendel',
  category: 'Latest',
  url: 'assets/img/forest.jpeg'
} ,
{
  id: 1,
  userID: 1,
  listId: null,
  title: 'Montañas de Angmar',
  category: 'Latest',
  url: 'assets/img/mountain.jpg'
},
{
  id: 2,
  userID: 1,
  listId: null,
  title: 'Rivendel',
  category: 'Latest',
  url: 'assets/img/forest.jpeg'
} 


 
  ]);

  constructor() { }
}
