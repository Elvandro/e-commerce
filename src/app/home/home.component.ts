import { Component, OnInit } from '@angular/core';
import { faTruck, faLandmark, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faTruck = faTruck;
  faLandmark = faLandmark;
  faLock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
