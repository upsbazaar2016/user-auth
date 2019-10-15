import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appExcerpt]'
})
export class ExcerptDirective implements OnInit{
  @Input() appExcerpt: number;
  @Input() fulltext: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.trimText();
    this.addReadMoreLink();
  }

  trimText() {
    this.element.nativeElement.innerText = this.fulltext.split(' ').slice(0, this.appExcerpt).join(' ');
  }

  addReadMoreLink() {
    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('load-more', 'load-more');
    anchorTag.style.setProperty('cursor', 'pointer');
    anchorTag.style.setProperty('color', '#f82045');
    anchorTag.innerText = ' (read more...)';
    this.element.nativeElement.appendChild(anchorTag);
  }

  @HostListener('click', ['$event.target']) onClick(target) {
    if (Object.values(target.attributes).map((item: any) => item.nodeValue === 'load-more').some(property => property === true)) {
      this.showAll();
    }
  }

  showAll() {
    this.element.nativeElement.innerText = this.fulltext;
  }
}
