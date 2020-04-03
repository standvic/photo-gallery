import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../core/services/util.service';
import {ItemModel} from '../../core/models/ItemModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public gridItems: any;

  constructor(private util: UtilService) {}

  ngOnInit() {
    this.util.init();
    this.gridItems = this.util.readyItems;
  }
}
