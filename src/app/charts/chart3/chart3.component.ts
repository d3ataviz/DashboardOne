import { Component, OnInit, ElementRef, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart3',
  template: `<svg></svg>`,
  styleUrls: ['./chart3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Chart3Component implements OnInit, OnChanges {

  @Input() data: any[];
  host: any;
  svg: any;

  rectWidth = 10;
  padding = 2;

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement);

    console.log(this);
   }

  ngOnInit() {
    this.svg = this.host.select('svg');

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.svg) { return; }
    if (changes && changes.data){
      this.drawRectangles();
    }
  }

  drawRectangles(){
    const rects = this.svg.selectAll('rect')
    .data(this.data || []);

/*     rects
    .attr('x', (d, i) => i * (this.rectWidth + this.padding))
    .attr('height', (d) => d.employee_age); */

    rects.enter().append('rect')
    .attr('width', this.rectWidth)
    .merge(rects)
    .attr('x', (d, i) => i * (this.rectWidth + this.padding))
    .attr('height', (d) => d.employee_age);

    rects.exit().remove();
  }

}
