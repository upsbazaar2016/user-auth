import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { MentorshipTree } from 'src/app/core/interfaces';

@Directive({
  selector: '[appMentorshipTree]'
})
export class MentorshipTreeDirective implements OnInit {
  @Input() appMentorshipTree: MentorshipTree;
  @Input() colors: any;
  margin: any;
  lineLength: number;
  midX: number;
  midY: number;
  strokeWidth: number;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.textAnchor = 'middle';
    this.midX = (this.element.nativeElement.clientWidth / 2);
    this.midY = (this.element.nativeElement.clientHeight / 2);
    this.lineLength = 100;
    this.strokeWidth = 3;
    this.margin = {
      top: 20, right: 20, bottom: 20, left: 20
    };
    this.generateLines();

    this.generateNames();

    this.generateCircles();
  }

  generateLines(): void {
    let html = `<g>`;
    if (this.appMentorshipTree.mentor) {
      html += `<path fill='none' stroke='${this.colors.lines}' stroke-width='${this.strokeWidth}' d='M ${this.midX} ${this.margin.top} l 0 ${this.lineLength - 5}' />`;
    }
    if (this.appMentorshipTree.mentees && this.appMentorshipTree.mentees.length) {
      switch (this.appMentorshipTree.mentees.length) {
        case 1:
          html += `<path fill='none' stroke='${this.colors.lines}' stroke-width='${this.strokeWidth}' d='M ${this.midX} ${(2 * this.margin.top) + this.lineLength} l 0 ${this.lineLength}' />`;
          html += `<path fill='none' stroke='${this.colors.lines}' stroke-width='${this.strokeWidth}' d='M ${this.midX} ${2 * (this.margin.top + this.lineLength)} l -${this.midX / 3} ${this.midX / 3}' />`; 
          break;
        case 2:
          html += `<path fill='none' stroke='${this.colors.lines}' stroke-width='${this.strokeWidth}' d='M ${this.midX} ${(2 * this.margin.top) + this.lineLength} l 0 ${this.lineLength}' />`;
          html += `<path fill='none' stroke='${this.colors.lines}' stroke-width='${this.strokeWidth}' d='M ${this.midX} ${2 * (this.margin.top + this.lineLength)} l -${this.midX / 3} ${this.midX / 3}' />`; 
          html += `<path fill='none' stroke='${this.colors.lines}' stroke-width='${this.strokeWidth}' d='M ${this.midX} ${2 * (this.margin.top + this.lineLength)} l ${this.midX / 3} ${this.midX / 3}' />`; 
          break;
      }
    }
    html += `</g>`;
    this.element.nativeElement.innerHTML += html;
  }

  generateNames() {
    let html = `<g class='names'>`;
    if (this.appMentorshipTree.mentor) {
      html += `<text x='${this.midX}' y='${(this.margin.top/4) + (this.margin.top/2)}' fill='${this.colors.names}' >${this.appMentorshipTree.mentor}</text>`;
    }
    if (this.appMentorshipTree.username) {
      html += `<text x='${this.midX}' y='${ (3 * this.margin.top) / 2 + this.lineLength }' fill='${this.colors.names}' >${this.appMentorshipTree.username}</text>`;
    }

    if (this.appMentorshipTree.mentees && this.appMentorshipTree.mentees.length) {
      switch (this.appMentorshipTree.mentees.length) {
        case 1:
          html += `<text x='${(2*this.midX)/3}' y='${ 3 * (this.margin.top + this.lineLength) - 10 }' fill='${this.colors.names}' >${(this.appMentorshipTree.mentees && this.appMentorshipTree.mentees[0])? this.appMentorshipTree.mentees[0] : 'Mentee 1'}</text>`;
          break;
        case 2:
          html += `<text x='${(2*this.midX)/3}' y='${ 3 * (this.margin.top + this.lineLength) - 10 }' fill='${this.colors.names}' >${(this.appMentorshipTree.mentees && this.appMentorshipTree.mentees[0])? this.appMentorshipTree.mentees[0] : 'Mentee 1'}</text>`;
          html += `<text x='${(4*this.midX)/3}' y='${ 3 * (this.margin.top + this.lineLength) - 10 }' fill='${this.colors.names}' >${(this.appMentorshipTree.mentees && this.appMentorshipTree.mentees[1])? this.appMentorshipTree.mentees[1] : 'Mentee 2'}</text>`;
          break;
      }
    }
    html += `</g>`;
    this.element.nativeElement.innerHTML += html;
  }

  generateCircles() {
    let html = `<g>`;
    if (this.appMentorshipTree.mentor) {
      html += `<circle fill='${this.colors.circles}' cx='${this.midX}' cy='${this.margin.top}' r='${this.strokeWidth}'></circle>`;
      html += `<circle fill='${this.colors.circles}' cx='${this.midX}' cy='${this.margin.top + this.lineLength - 5 }' r='${this.strokeWidth}'></circle>`;
    }
    if (this.appMentorshipTree.mentees && this.appMentorshipTree.mentees.length) {
      html += `<circle fill='${this.colors.circles}' cx='${this.midX}' cy='${ 2 * this.margin.top + this.lineLength }' r='${this.strokeWidth}'></circle>`;
      switch (this.appMentorshipTree.mentees.length) {
        case 1:
            html += `<circle fill='${this.colors.circles}' cx='${(2*this.midX)/3}' cy='${2 * (this.margin.top + this.lineLength) + Math.sqrt(Math.pow(this.lineLength, 2)/2) + 12.5 }' r='${this.strokeWidth}'></circle>`;
            break;
        case 2:
            html += `<circle fill='${this.colors.circles}' cx='${(2*this.midX)/3}' cy='${2 * (this.margin.top + this.lineLength) + Math.sqrt(Math.pow(this.lineLength, 2)/2) + 12.5 }' r='${this.strokeWidth}'></circle>`;
            html += `<circle fill='${this.colors.circles}' cx='${(4*this.midX)/3}' cy='${2 * (this.margin.top + this.lineLength) + Math.sqrt(Math.pow(this.lineLength, 2)/2) + 12.5 }' r='${this.strokeWidth}'></circle>`;
            break;
      }
    }
    html += `</g>`;
    this.element.nativeElement.innerHTML += html;
  }
}
