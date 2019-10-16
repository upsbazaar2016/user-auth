import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  programConfig: any;
  constructor() { }

  ngOnInit() {
    this.programConfig = {
      startDate: '2018-10-30',
      endDate: '2019-02-28',
      milestones: [
        {
          ms1: '2018-11-30'
        },
        {
          ms2: '2018-12-30'
        },
        {
          ms3: '2019-02-20'
        }
      ]
    };
  }

}
