import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

  data = [125, 100, 50, 75, 200, 300, 100];
  rectWidth = 80;
  max = 250;
  dimensions: DOMRect;
  outerPadding = 20;
  padding = 0;
  bandwidth = 0;
  bandwidthCoef = 0.8; // 80% = 0.8;

  // width = width svg / number of rectangles
  // width = svg.width / data.length

  constructor(private element: ElementRef) {
   }

  ngOnInit() {
    const svg = this.element.nativeElement.getElementsByTagName('svg')[0];
    this.dimensions = svg.getBoundingClientRect();

    this.rectWidth = (this.dimensions.width - 2 * this.outerPadding) / this.data.length;
    this.bandwidth = this.bandwidthCoef * this.rectWidth;
    this.padding = (1 - this.bandwidthCoef) * this.rectWidth;
    console.log(svg, svg.getBoundingClientRect());
    this.max = 1.3 * Math.max(...this.data); // 1.3 = 130%
  }

}
