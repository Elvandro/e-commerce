import { Component, OnInit } from '@angular/core';
import { faTruck, faLandmark, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  faTruck = faTruck;
  faLandmark = faLandmark;
  faLock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
