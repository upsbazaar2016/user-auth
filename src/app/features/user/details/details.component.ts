import { MentorshipTree } from 'src/app/core/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: MentorshipTree;
  colors: any;
  constructor() { }

  ngOnInit() {
    this.user = {
      username: 'aamanh30',
      mentor: 'senthilnathan',
      mentees: ['aaman.hussain', 'hussey']
    };
    this.colors = {
      lines: 'red', names: 'green', circles: 'black'
    };
  }

}
