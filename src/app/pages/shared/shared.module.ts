import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component'; 
import { PhonePipe } from './phone/phone.pipe';
 
@NgModule({
  declarations: [
    NavComponent,
    CartComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added 
    
  ],
  exports:[NavComponent,CartComponent,PhonePipe]
})
export class SharedModule { }
