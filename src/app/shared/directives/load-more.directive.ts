import { Directive, ElementRef, Output, HostListener, Input, EventEmitter } from '@angular/core';

export interface LoadMoreConfig {
  loading: boolean;
  loadmore: boolean;
  scrollPercent: number;
}

@Directive({
  selector: '[appLoadMore]'
})
export class LoadMoreDirective {
  @Input() appLoadMore: LoadMoreConfig;
  @Output() loadMore = new EventEmitter();

  constructor(private element: ElementRef) { }

  @HostListener('scroll', ['$event.target']) onScroll(target) {
    // tslint:disable-next-line: max-line-length
    if (this.appLoadMore.loadmore) {
      const percentage = Math.ceil((100 * (this.element.nativeElement.clientHeight + this.element.nativeElement.scrollTop)) / this.element.nativeElement.scrollHeight);
      if (percentage > this.appLoadMore.scrollPercent && !this.appLoadMore.loading) {
        this.loadMore.emit(percentage + '%');
      }
    }
  }
}
