import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { ItemModel } from '../models/ItemModel';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  public ROWS = 2;
  public COLUMNS = 3;
  public date: string;
  public items = new Array<ItemModel>(this.ROWS * this.COLUMNS);
  public readyItems = new  Array(this.ROWS);

  private PHOTOSIZE = '/500/400';

  constructor(private api: ApiService) {
  }

  public init() {

    let randId;
    const now = moment();
    now.locale('ru');
    this.date = now.format('LLL');

    for (let i = 0; i < this.ROWS * this.COLUMNS; i++) {
      this.items[i] = new ItemModel();
      this.items[i].id = i;
      this.items[i].date = this.date;
    }

    this.api.getPhotoList().subscribe((phList) => {
      this.items.forEach((el) => {
        randId = Math.floor(Math.random() * 100);
        el.photoUrl = phList[randId].download_url.replace(/\/\d+\/\d+(?!\/)(?!\d)/, this.PHOTOSIZE);
      });
    });

    this.api.getPostList().subscribe((poList) => {
      this.items.forEach((el) => {
        randId = Math.floor(Math.random() * 100);
        el.text = poList[randId].body;
      });
    });

    this.readyItems.forEach((el) => {
      el = new Array<ItemModel>(this.COLUMNS);
      el.forEach((subEl) => {
        subEl = new ItemModel();
      });
    });
    for (let i = 0; i < this.ROWS; i++) {
      this.readyItems[i] = new Array<ItemModel>(this.COLUMNS);
      for (let j = 0; j < this.COLUMNS; j++) {
        this.readyItems[i][j] = this.items[j + i * this.COLUMNS];
      }
    }
  }
}
