import { Router } from '@angular/router';
import { PublicService } from './../../public.service';
import { Bid } from './../../bid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
bid: Bid = new Bid();
  prod2Bidders: Bid[] = [];
  showBids: Bid[] = [];
  searchVal = '';
  tooLow = false;
  hasNotUsedSearch = true;
  constructor(private _publicService: PublicService, private _router: Router) {
    this.checkUserInSession();
    this.getAllBidders();
    this.showBids = this.prod2Bidders;
  }

  submitValidBid() {
    if (this.prod2Bidders.length === 0) {
      this.submitBid();
    } else {
      if (this.bid.price > this.prod2Bidders[0].price) {
        this.tooLow = false;
        this.submitBid();
      } else {
        console.log('price must be higher than previous bid');
        this.tooLow = true;
      }
    }
  }

  submitBid() {
      this.hasNotUsedSearch = true;
      console.log('submitting bid');
      this._publicService.submitBidToProduct2(this.bid)
        .then((data) => {
          console.log('controller success submitting bid');
          console.log(data);
          this.bid = new Bid();
          this.getAllBidders();
        })
        .catch((error) => {
          console.log('controller error submitting bid');
          console.log(error);
        });
  }

  ngOnInit() {
  }

  getAllBidders() {
    this._publicService.getAllBiddersFromProduct2()
      .then((data) => {
        console.log('controller success get all bidders p1');
        console.log(data);
        this.prod2Bidders = data;
      })
      .catch((error) => {
        console.log('controller error get all bidders p1');
        console.log(error);
      });
  }
 
  searchBidders() {
    this.hasNotUsedSearch = false;
    console.log('this is happening');
    console.log(this.searchVal);
    this.showBids = this.prod2Bidders.filter((index) => {
      return index.name.toLowerCase().includes(this.searchVal.toLowerCase());
    });
    console.log('These are product 1 bidders');
    console.log(this.prod2Bidders);
    console.log('Showbids');
    console.log(this.showBids);
  }

  checkUserInSession() {
    this._publicService.getCurrentUser()
      .then((data) => {
        console.log('got then response');
        console.log(data);
        if(!data) {
          this._router.navigate(['']);
        }
      })
      .catch((error) => {
        console.log('got catch response');
        console.log(error);
      });
  }
}
