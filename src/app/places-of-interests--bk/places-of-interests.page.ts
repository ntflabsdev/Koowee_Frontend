import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-of-interests',
  templateUrl: './places-of-interests.page.html',
  styleUrls: ['./places-of-interests.page.scss'],
})
export class PlacesOfInterestsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
slideOpts = {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,
  loop:true,
  autoplay:true,
  centeredSlides: true,
}
}
