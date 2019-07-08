import { Component, OnInit } from '@angular/core';
//importando o servico da galeria
import { ImageService } from '../shared/services/image-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  heroAvatar = 'http://localhost:4200/assets/img/default.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectImage() {
    this.router.navigate(['/gallery']);
  }

}
