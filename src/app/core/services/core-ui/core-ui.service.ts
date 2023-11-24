import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreUiService {
  private document = inject(DOCUMENT);
  private scroller = inject(ViewportScroller);

  private subject = new BehaviorSubject(this.scroller.getScrollPosition()[1]);
  scrollYPos$ = this.subject.asObservable();

  private scrollYPosInternal$ = fromEvent(this.document, 'scroll').pipe(
    map(() => this.scroller.getScrollPosition()[1])
  );

  scrolledToTop$ = this.scrollYPos$.pipe(
    map((data) => data === 0),
    distinctUntilChanged()
  );

  constructor() {
    this.scrollYPosInternal$.subscribe(this.subject);
  }
}
