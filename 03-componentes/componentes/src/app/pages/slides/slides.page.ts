import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone:false
})
export class SlidesPage implements OnInit {

  ngOnInit() {
    const swiper = new Swiper('.swiper-container', {
      loop: true
    });
  }
}

