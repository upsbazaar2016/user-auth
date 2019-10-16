import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-graph',
  templateUrl: './progress-graph.component.html',
  styleUrls: ['./progress-graph.component.css']
})
export class ProgressGraphComponent implements OnInit {
  @Input() config: any;
  constructor() { }

  ngOnInit() {
    this.numberOfDays();
  }

  numberOfDays() {
    const totalDays = this.getDays(this.config.endDate);
    const mileStoneDates = Object.values(this.config.milestones).map(item => Object.values(item)[0]);

    const milestoneDays = mileStoneDates.map(date => this.getDays(date));

    const points = milestoneDays.map(day => ((day * 800)/ totalDays));

    let circles = '';
    points.map(point => {
      circles += `<circle cx='${point}' fill='green' cy='50' r='3'></circle>`;
    });

    document.querySelector('.circle-wrap').innerHTML = circles;
  }

  getDays(date: string) {
    return (Math.abs(Math.ceil(new Date(date) - new Date(this.config.startDate)) / (1000 * 60 * 60 * 24)));
  }
}
