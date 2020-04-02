/* tslint:disable:no-string-literal */
import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import {UtilService} from '../../core/services/util.service';
import {ItemModel} from '../../core/models/ItemModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.less']
})
export class PhotoComponent implements OnInit {
  id: number;
  public carouselItems = new  Array<ItemModel>(this.util.COLUMNS);

  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute,
              private util: UtilService,
              private  router: Router) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {

    this.changePhoto();
  }

  changePhoto() {
    for (let i = 0; i < this.util.items.length; i++) {
      if (this.util.items[i].id == this.id) {
        this.carouselItems[1] = this.util.items[i];
        if (i === 0) {
          this.carouselItems[0] = this.util.items[this.util.ROWS * this.util.COLUMNS - 1];
        } else {
          this.carouselItems[0] = this.util.items[i - 1];
        }
        if (i === this.util.ROWS * this.util.COLUMNS - 1) {
          this.carouselItems[2] = this.util.items[0];
        } else {
          this.carouselItems[2] = this.util.items[i + 1];
        }
      }
    }
  }

  return() {
    this.router.navigate(['/list']);
  }

  click($event, i) {
    if (i !== this.id) {
      this.id = i;
      this.changePhoto();
    }
  }
}
