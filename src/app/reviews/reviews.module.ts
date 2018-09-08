import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ],
  declarations: [ReviewsComponent]
})
export class ReviewsModule { }
