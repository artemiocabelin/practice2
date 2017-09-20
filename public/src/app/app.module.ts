import { PublicService } from './public.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultComponent } from './result/result.component';
import { Product1Component } from './dashboard/product1/product1.component';
import { Product2Component } from './dashboard/product2/product2.component';
import { Product3Component } from './dashboard/product3/product3.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    ResultComponent,
    Product1Component,
    Product2Component,
    Product3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
