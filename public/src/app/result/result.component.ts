import { Router } from '@angular/router';
import { PublicService } from './../public.service';
import { Bid } from './../bid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  currentUser;
  prod1bidder: Bid;
  prod2bidder: Bid;
  prod3bidder: Bid;
  constructor(private _publicService: PublicService, private _router: Router) {
    this.checkUserInSession();
    this.getAllWinners();
   }

  getAllWinners() {
    console.log('getting all winners');
    this._publicService.getAllBiddersFromProduct1()
      .then((data) => {
        this.prod1bidder = data[0];
        console.log('getting prod 1 winner');
        console.log(this.prod1bidder);
      })
      .catch();
    this._publicService.getAllBiddersFromProduct2()
      .then((data) => {
        this.prod2bidder = data[0];
        console.log('getting prod 2 winner');
        console.log(this.prod2bidder);
      })
      .catch();
    this._publicService.getAllBiddersFromProduct3()
      .then((data) => {
        this.prod3bidder = data[0];
        console.log('getting prod 3 winner');
        console.log(this.prod3bidder);
      })
      .catch();
  }

  startBid() {
    console.log('starting bid');
    this._publicService.clearAll()
      .then(data => {
        console.log('success clearing all');
        this._router.navigate(['/bids']);
      })
      .catch((error) => {
        console.log('error clearing all');
      });
  }
  ngOnInit() {
  }

  checkUserInSession() {
    this._publicService.getCurrentUser()
      .then((data) => {
        console.log('got then response');
        console.log(data);
          this.currentUser = data;
          console.log(this.currentUser);
          if(!data) {
            this._router.navigate(['/']);
          }
      })
      .catch((error) => {
        console.log('got catch response');
        console.log(error);
      });
  }

  

}
