import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  @Input() photos;

  constructor() {


  }

  ngOnInit() {

  }

}
