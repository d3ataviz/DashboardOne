import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

  data = [125, 100, 50, 75, 200, 60];
  width = 80;

  constructor() {
   }

  ngOnInit() {
  }

}
