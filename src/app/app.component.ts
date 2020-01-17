import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],

  //adding animation
  animations: [
    //setting the direction betwen to different states
    trigger('pageAnimation', [
      //state 1
      state('small', style({
        transform: 'scale(1)',
      })),

      //state 2
      state('large', style({
        transform: 'scale(1.2)',
      })),

      //setting direction for animation to work - <=> two ways -
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(30px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),
    ]),
  ]
})
export class AppComponent  {

  //setting default state
  state: string = 'small';

  //iff small make it large, if large make it small
  animateIt() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}