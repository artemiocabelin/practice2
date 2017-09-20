import { Router } from '@angular/router';
import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allBidders = [];
  cannotEndBid = false;
  constructor(private _publicService: PublicService, private _router: Router) {
    this.cannotEndBid = false;
   }

  ngOnInit() {
  }
  logoutUser() {
    this._publicService.logoutUser()
      .then((data) => {
        console.log('controller success logging user out');
        console.log(data);
        this._router.navigate(['/']);
      })
      .catch((error) => {
        console.log('controller error get all bidders p1');
        console.log(error);
      });
  }

  endBid() {
    console.log('easdfasdfasnding bid');
    this._publicService.getAllBiddersFromProduct1()
      .then((data) => {
        console.log('got prod 1 bidders');
        console.log(data.length);
        if(data.length === 0) {
          this.cannotEndBid = true;
        } else {
          this.cannotEndBid = false;
        }
      })
      .catch((error) => {
        console.log('error getting prod 1 bidders');
        this.cannotEndBid = true;
      });

    this._publicService.getAllBiddersFromProduct2()
      .then((data) => {
        if(data.length === 0) {
          this.cannotEndBid = true;
        } else {
          this.cannotEndBid = false;
        }
      })
      .catch((error) => {
        console.log('error getting prod 2 bidders');
      });
    this._publicService.getAllBiddersFromProduct3()
      .then((data) => {
        console.log('asdfasdfsagot prod 3 bidders');
        if(data.length === 0) {
          this.cannotEndBid = true;
        } else {
          this.cannotEndBid = false;
        }
        if(this.cannotEndBid=== false) {
          this._router.navigate(['/result']);
        }
      })
      .catch((error) => {
        console.log('error getting prod 3 bidders');
      });
  }

  checkerBid() {
    for(let i = 0; i < this.allBidders.length;i++) {
      console.log(this.allBidders[i].length);
      if (this.allBidders[i].length < 1) {
        this.cannotEndBid = true;
      }
    }
    if (!this.cannotEndBid) {
      console.log('ok to end bid');
      this._router.navigate(['/result']);
    }
  }
}
