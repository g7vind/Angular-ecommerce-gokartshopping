import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent{
  @Input() rating: any;
  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }
  get empStars() {
    return Array(5 - Math.round(this.rating)).fill(0);
  }
}