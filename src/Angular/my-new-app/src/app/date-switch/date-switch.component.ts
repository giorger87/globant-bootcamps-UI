import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-switch',
  template: `

  <ng-container *ngIf="typeselection" [ngSwitch]= "typeselection">
    <input *ngSwitchCase="'sol'" type="number" [(ngModel)]='rover.date' placeholder="Choose date in Sols" >
    <input *ngSwitchCase="'earth_date'" type="datepicker" [(ngModel)]='rover.date' placeholder="Choose a date">

  </ng-container>

  `,
  styleUrls: ['./date-switch.component.css']
})
export class DateSwitchComponent implements OnInit {
  @Input() typeselection;
  constructor() { }

  ngOnInit() {
  }

}
