import { Component, OnInit, Input } from '@angular/core';
import { PhotoListComponent } from '../photo-list/photo-list.component';
import { MarsApiPhotosService } from '../mars-api-photos.service';
import { Observable } from 'rxjs/Observable';
import { Rover, rovers } from '../rover';
import { CamPipePipe } from '../cam-pipe.pipe';

import { DateSwitchComponent } from '../date-switch/date-switch.component';
@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css'],
  providers: [ MarsApiPhotosService ]
})

export class RoverComponent implements OnInit {
  @Input() rover;
  photos: any[] = null;
  date: string;
 // rovers = rovers;
  earth_date = 'earth_date';
  sol = 'sol';
  dTypeSelection = DateSwitchComponent;
  constructor(private marsPhotos: MarsApiPhotosService) {


  }

  consoleprint(data) {
    console.log(data);
  }
  formatDate(oldDate: string): string {
    const re = /\//gi;
    return oldDate.replace(re, '-');
  }
  getRoverPics(rover: string,
    date: string,
    camera: string,
    date_type: string) {
      console.log(rover);
      console.log(date);
      console.log(this.formatDate(date));
      console.log(camera.toLocaleLowerCase());
      console.log(date_type);
      this.marsPhotos.getPicsByDate(rover, date, camera, date_type)
      .subscribe(
        response => {
        this.photos = response.json();
      });

    }

  ngOnInit() {
  }

}
