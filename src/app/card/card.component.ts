import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  heroAvatar = 'http://localhost:4200/assets/img/default.png';
  
  constructor() { }

  ngOnInit() {
  }

}
