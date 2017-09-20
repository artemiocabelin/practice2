import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'; // for converting to promise

@Injectable()
export class PublicService {

  constructor(private _http: Http) { }

  createBidderSession(bidderData) {
    console.log('service creating bidder in session');
    return this._http.post('api/bids/create', bidderData)
      .map(response => response.json())
      .toPromise();
  }

  submitBidToProduct1(bidData) {
    console.log('service submitting bid to product 1');
    return this._http.post('api/bids/product1/submit', bidData)
      .map(response => response.json())
      .toPromise();
  }

  getAllBiddersFromProduct1() {
    console.log('service getting all bidders from product 1');
    return this._http.get('/api/bids/product1/getAll')
      .map(response => response.json())
      .toPromise();
  }
  submitBidToProduct2(bidData) {
    console.log('service submitting bid to product 2');
    return this._http.post('api/bids/product2/submit', bidData)
      .map(response => response.json())
      .toPromise();
  }

  getAllBiddersFromProduct2() {
    console.log('service getting all bidders from product 2');
    return this._http.get('/api/bids/product2/getAll')
      .map(response => response.json())
      .toPromise();
  }

  submitBidToProduct3(bidData) {
    console.log('service submitting bid to product 3');
    return this._http.post('api/bids/product3/submit', bidData)
      .map(response => response.json())
      .toPromise();
  }

  getAllBiddersFromProduct3() {
    console.log('service getting all bidders from product 3');
    return this._http.get('/api/bids/product3/getAll')
      .map(response => response.json())
      .toPromise();
  }

  logoutUser() {
    console.log('service loggin user out');
    return this._http.get('api/bids/logout')
      .map(response => response.json())
      .toPromise();
  }

  getCurrentUser() {
    console.log('service getting if user in session');
    return this._http.get('api/bids/checksession')
      .map(response => response.json())
      .toPromise();
  }

  clearAll() {
    console.log('service clear all bidders');
    return this._http.get('api/bids/clearall')
      .map(response => response.json())
      .toPromise();
  }
}
