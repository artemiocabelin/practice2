import { PublicService } from './../public.service';
import { Bid } from './../bid';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  bid = new Bid();

  constructor(private _publicService: PublicService, private _router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('angular creating bidder in session');
    this._publicService.createBidderSession(this.bid)
      .then((data) => {
        console.log('success createBidderSession');
        console.log(data);
        this._router.navigate(['bids']);
      })
      .catch((error) => {
        console.log('error createBidderSession');
      });
  }

}
