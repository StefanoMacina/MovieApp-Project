import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-wrapper',
  templateUrl: './range-wrapper.component.html',
  styleUrls: ['./range-wrapper.component.scss'],
})
export class RangeWrapperComponent implements OnInit {
  @Input() rangeValue: number = 0;

  color: string = '';

  constructor() {}

  ngOnInit() {
    this.color = this.setColor(this.rangeValue);
  }

  setColor(val: number) {
    const toDecimal = val / 10;

    if (toDecimal <= 0.4) {
      return 'danger';
    } else if (toDecimal > 0.4 && toDecimal <= 0.8) {
      return 'secondary';
    } else {
      return 'primary';
    }
  }
}
