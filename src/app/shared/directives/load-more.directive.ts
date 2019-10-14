import { Directive, ElementRef, OnInit, Output, HostListener } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appLoadMore]'
})
export class LoadMoreDirective implements OnInit {
  @Output() loadMore = new EventEmitter();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    console.log(this.element.nativeElement);
  }

  @HostListener('scroll', ['$event.target']) onScroll(target) {
    // tslint:disable-next-line: max-line-length
    const percentage = Math.ceil((100 * (this.element.nativeElement.clientHeight + this.element.nativeElement.scrollTop)) / this.element.nativeElement.scrollHeight);
    if (percentage > 80) {
      console.log(percentage + '%');
    }
  }
}
