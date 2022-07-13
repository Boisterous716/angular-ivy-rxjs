import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, timer, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-observe-behave',
  templateUrl: './observe-behave.component.html',
  styleUrls: ['./observe-behave.component.css'],
})
export class ObserveBehaveComponent implements OnInit {
  buttonClicker$: Subscription;
  counter: number = 0;
  constructor() {}
  @ViewChild('btnCounter') btnCounter: ElementRef;
  ngOnInit() {}

  ngAfterViewInit() {
    this.buttonClicker$ = fromEvent(
      this.btnCounter.nativeElement,
      'click'
    ).subscribe(() => this.counter++);
  }

  buttonClick() {}

  async increaseCount(): Promise<number> {
    this.counter = this.counter + 1;
    return this.counter;
  }
}
